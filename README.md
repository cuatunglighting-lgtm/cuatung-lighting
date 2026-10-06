# CUATUNG LIGHTING – QUẢN LÝ CHẤM CÔNG

## Bộ GitHub Pages đồng bộ
- `index.html` tải `config.js` trước `app.js`.
- `config.js` đã trỏ tới Web App `/exec` hiện tại.
- `sw.js` dùng cache version mới và network-first cho HTML/JS/CSS/config để tránh iPhone giữ giao diện cũ.
- Không lưu tài khoản/mật khẩu Admin trong GitHub.

## API
Web App: `https://script.google.com/macros/s/AKfycbyyVkl80KzBSBhuTf4RGNPD9eltEYCXCOIYlQ9_yA_XJgcVEOS0a7Q4FDiszrnPRxlBdg/exec`

## Đưa lên GitHub
1. Upload toàn bộ nội dung thư mục `GITHUB/` vào root repo.
2. Commit lên branch `main`.
3. GitHub Pages → Deploy from a branch → `main` → `/(root)`.
4. Mở trang Pages bằng cửa sổ riêng tư/ẩn danh để kiểm tra lần đầu.

## Sau khi cập nhật
Nếu iPhone vẫn giữ bản cũ: đóng tab/PWA cũ, mở lại URL GitHub Pages. `sw.js` đã được tăng cache version và đăng ký với `updateViaCache: none`.
