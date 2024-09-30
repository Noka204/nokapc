<?php
// Đường dẫn tới tệp JSON lưu lượt xem
$jsonFile = 'views.json';

// Đọc địa chỉ IP của người dùng
$ipAddress = $_SERVER['REMOTE_ADDR'];

// Đọc nội dung từ tệp JSON
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);

// Kiểm tra xem IP đã tồn tại trong danh sách chưa
if (!in_array($ipAddress, $data['ips'])) {
    // Nếu chưa tồn tại, thêm IP vào danh sách và tăng số lượt xem
    $data['ips'][] = $ipAddress;
    $data['views'] += 1;

    // Cập nhật tệp JSON
    file_put_contents($jsonFile, json_encode($data));
}

// Trả về số lượt xem
echo $data['views'];
?>
