# Bắt Chữ Emoji

Game web tiếng Việt, thiết kế ưu tiên điện thoại và video quay màn hình.

## Vòng lặp tăng trưởng

1. Người dùng chơi 10 câu được chọn từ kho 138 câu.
2. Nhận điểm, số câu đúng và cấp bậc.
3. Chia sẻ lời thách kèm đường dẫn.
4. Bạn bè mở game và cố vượt điểm.

## Chạy

Từ thư mục cha:

```bash
python3 -m http.server 4173
```

Mở <http://localhost:4173/emoji-game/>.

Game không cần máy chủ, tài khoản hoặc cơ sở dữ liệu. Kỷ lục được lưu trong
trình duyệt. Game ưu tiên câu chưa gặp và chỉ làm mới lịch sử sau khi người chơi
đã đi qua toàn bộ kho câu hỏi.

## Thống kê

Trang quản trị tổng hợp:

<https://bat-chu-emoji.pages.dev/analytics.html>

Dữ liệu được lưu trong Cloudflare D1: truy cập, bắt đầu chơi, hoàn thành, chia
sẻ, điểm số, thời gian chơi, loại thiết bị, nguồn truy cập và quốc gia. Không lưu
tên, email hoặc nội dung cá nhân.

## Phiên bản cho bé

<https://bat-chu-emoji.pages.dev/kids/>

Gồm câu hỏi nhận biết con vật, màu sắc, đồ vật, đếm số, thiên nhiên và cơ thể.
Mỗi lượt có 8 câu, hỗ trợ đọc câu hỏi tiếng Việt và không có đồng hồ đếm ngược.

## Triển khai Cloudflare Pages

Từ thư mục `emoji-game`:

```bash
npx wrangler pages deploy .
```
