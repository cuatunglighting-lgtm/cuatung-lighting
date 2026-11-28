# Frontend (GitHub Pages)

Giao diện tĩnh, tối ưu iPhone: thanh tab dưới, hộp thoại dạng bottom-sheet, danh sách dạng thẻ, ô nhập 16px (iOS không tự phóng to), hỗ trợ tai thỏ (safe-area), thêm vào Màn hình chính (PWA nhẹ, không service worker để tránh lệch phiên bản).

## Tệp
- `index.html` – khung trang (không có CSS/JS nội tuyến, không base64).
- `assets/css/style.css` – toàn bộ giao diện.
- `assets/js/config.js` – **cấu hình duy nhất cần sửa**: `API_URL`.
- `assets/js/api.js` – lớp gọi API (POST `text/plain`, không preflight).
- `assets/js/app.js` – logic giao diện; không chứa nghiệp vụ.
- `manifest.webmanifest`, `assets/images/*` – biểu tượng và hình ảnh.

## Bật GitHub Pages
Settings → Pages → Deploy from a branch → nhánh `main`, thư mục chứa `index.html` (nếu đặt repo chỉ có thư mục này ở gốc thì chọn `/ (root)`).

## Thêm vào Màn hình chính trên iPhone
Mở bằng Safari → nút Chia sẻ → "Thêm vào MH chính".
