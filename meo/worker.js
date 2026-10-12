/**
 * ==============================================================================
 * CLOUDFLARE WORKER - GITHUB REPO CMS MIDDLEWARE
 * Tự động cập nhật file js/list.js trên GitHub repo thông qua GitHub REST API
 * ==============================================================================
 *
 * CÁC BIẾN MÔI TRƯỜNG (Environment Variables) CẦN CÀI ĐẶT TRÊN CLOUDFLARE WORKER:
 * (Vào Cloudflare Dashboard -> Workers & Pages -> Worker của bạn -> Settings -> Variables)
 *
 * 1. GITHUB_TOKEN : Personal Access Token (classic hoặc fine-grained) có quyền `repo` hoặc `contents:write`
 * 2. REPO_OWNER   : Tên tài khoản hoặc tổ chức GitHub (ví dụ: "your-username")
 * 3. REPO_NAME    : Tên kho lưu trữ GitHub (ví dụ: "rok-wontrade" hoặc "meo")
 * 4. FILE_PATH    : Đường dẫn tới file danh sách (mặc định: "js/list.js")
 * 5. BRANCH       : Tên nhánh cần commit (mặc định: "main" hoặc "master")
 * 6. ADMIN_SECRET : (Tùy chọn) Khóa bí mật bảo vệ Worker, nếu cài thì Admin CMS cần gửi header `X-Admin-Key`
 *
 * ==============================================================================
 */

// Hàm mã hóa chuỗi UTF-8 (hỗ trợ đầy đủ tiếng Việt có dấu) sang Base64
function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Hàm giải mã Base64 sang chuỗi UTF-8
function base64ToUtf8(base64) {
  const binary = atob(base64.replace(/\n/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

// Headers CORS chuẩn cho mọi response
function getCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Admin-Key",
    "Access-Control-Max-Age": "86400",
  };
}

// Helper trả về JSON có kèm header CORS
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...getCorsHeaders(),
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    // 1. Xử lý preflight CORS OPTIONS request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(),
      });
    }

    const url = new URL(request.url);

    // 2. Kiểm tra cấu hình môi trường bắt buộc
    const GITHUB_TOKEN = env.GITHUB_TOKEN;
    const REPO_OWNER = env.REPO_OWNER;
    const REPO_NAME = env.REPO_NAME;
    const DEFAULT_FILE_PATH = env.FILE_PATH || "js/list.js";
    const BRANCH = env.BRANCH || "main";
    const ADMIN_SECRET = env.ADMIN_SECRET;

    // Kiểm tra cấu hình biến môi trường
    if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
      return jsonResponse(
        {
          success: false,
          error: "Thiếu biến môi trường Cloudflare Worker!",
          details:
            "Vui lòng vào Settings -> Variables trên Cloudflare Worker để thêm: GITHUB_TOKEN, REPO_OWNER, REPO_NAME.",
          configStatus: {
            hasToken: !!GITHUB_TOKEN,
            hasOwner: !!REPO_OWNER,
            hasRepo: !!REPO_NAME,
            filePath: DEFAULT_FILE_PATH,
            branch: BRANCH,
          },
        },
        500
      );
    }

    // 3. Kiểm tra bảo mật (Nếu có cài ADMIN_SECRET)
    if (ADMIN_SECRET) {
      const clientKey =
        request.headers.get("X-Admin-Key") ||
        request.headers.get("Authorization")?.replace("Bearer ", "");
      if (clientKey !== ADMIN_SECRET) {
        return jsonResponse(
          {
            success: false,
            error: "Không có quyền truy cập (Unauthorized)! Khóa bảo mật Admin không chính xác.",
          },
          401
        );
      }
    }

    // Common GitHub API headers
    const githubHeaders = {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Cloudflare-Worker-CMS",
    };

    // ========================================================================
    // GET: Kiểm tra kết nối hoặc lấy nội dung file hiện tại từ GitHub
    // ========================================================================
    if (request.method === "GET") {
      const targetPath = url.searchParams.get("path") || DEFAULT_FILE_PATH;
      const getApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${targetPath}?ref=${BRANCH}`;

      try {
        const ghRes = await fetch(getApiUrl, { headers: githubHeaders });

        if (ghRes.status === 404) {
          return jsonResponse({
            success: true,
            exists: false,
            message: `File ${targetPath} chưa tồn tại trên repo (sẽ được tạo mới khi lưu).`,
            repo: `${REPO_OWNER}/${REPO_NAME}`,
            branch: BRANCH,
          });
        }

        if (!ghRes.ok) {
          const errData = await ghRes.json();
          return jsonResponse(
            {
              success: false,
              error: `Lỗi kết nối GitHub API (${ghRes.status})`,
              details: errData,
            },
            ghRes.status
          );
        }

        const data = await ghRes.json();
        const contentStr = data.content ? base64ToUtf8(data.content) : "";

        return jsonResponse({
          success: true,
          exists: true,
          sha: data.sha,
          filePath: targetPath,
          repo: `${REPO_OWNER}/${REPO_NAME}`,
          branch: BRANCH,
          content: contentStr,
        });
      } catch (err) {
        return jsonResponse(
          { success: false, error: err.message || "Lỗi ngoại lệ khi kết nối GitHub" },
          500
        );
      }
    }

    // ========================================================================
    // POST: Cập nhật / Ghi đè file trên GitHub
    // ========================================================================
    if (request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch (e) {
        return jsonResponse({ success: false, error: "Dữ liệu JSON không hợp lệ!" }, 400);
      }

      // Nhận nội dung file từ Frontend
      const content = body.content;
      if (typeof content !== "string" || !content.trim()) {
        return jsonResponse(
          { success: false, error: "Nội dung 'content' bị trống hoặc không phải chuỗi!" },
          400
        );
      }

      const commitMessage = body.message || "Admin CMS: update list.js";
      const targetPaths = body.updateBoth
        ? [DEFAULT_FILE_PATH, "list.js"] // Đồng bộ cả js/list.js lẫn list.js nếu yêu cầu
        : [body.filePath || DEFAULT_FILE_PATH];

      const results = [];

      try {
        for (const targetPath of targetPaths) {
          // Bước 3.1 & 3.2: Lấy mã SHA của file cũ (nếu có)
          const getApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${targetPath}?ref=${BRANCH}`;
          const getRes = await fetch(getApiUrl, { headers: githubHeaders });

          let currentSha = null;
          if (getRes.ok) {
            const fileData = await getRes.json();
            currentSha = fileData.sha;
          }

          // Bước 3.3: Mã hóa Base64 và commit ghi đè file
          const base64Content = utf8ToBase64(content);
          const putPayload = {
            message: commitMessage,
            content: base64Content,
            branch: BRANCH,
          };

          if (currentSha) {
            putPayload.sha = currentSha;
          }

          const putApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${targetPath}`;
          const putRes = await fetch(putApiUrl, {
            method: "PUT",
            headers: {
              ...githubHeaders,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(putPayload),
          });

          const putData = await putRes.json();

          if (!putRes.ok) {
            results.push({
              filePath: targetPath,
              success: false,
              status: putRes.status,
              error: putData.message || "Không thể commit file lên GitHub",
              details: putData,
            });
          } else {
            results.push({
              filePath: targetPath,
              success: true,
              sha: putData.content?.sha,
              commitSha: putData.commit?.sha,
              commitUrl: putData.commit?.html_url,
            });
          }
        }

        const allSuccess = results.every((r) => r.success);

        return jsonResponse(
          {
            success: allSuccess,
            message: allSuccess
              ? "Cập nhật file lên GitHub thành công!"
              : "Có lỗi xảy ra trong quá trình cập nhật file lên GitHub.",
            repo: `${REPO_OWNER}/${REPO_NAME}`,
            branch: BRANCH,
            results,
            notice:
              "Lưu thành công! Vui lòng đợi 1-3 phút để GitHub / Cloudflare Pages tự động build lại giao diện mới.",
          },
          allSuccess ? 200 : 502
        );
      } catch (err) {
        return jsonResponse(
          {
            success: false,
            error: err.message || "Lỗi máy chủ trong quá trình gửi yêu cầu lên GitHub",
          },
          500
        );
      }
    }

    return jsonResponse({ success: false, error: "Method Not Allowed" }, 405);
  },
};
