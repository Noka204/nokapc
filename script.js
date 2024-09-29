const uploadBackground = document.getElementById('upload-background');
const body = document.querySelector('body');
const introScreen = document.getElementById('intro-screen');
const mainScreen = document.getElementById('main-screen');
const blurBackground = document.querySelector('.blur-background');

// Xử lý khi người dùng chọn một file
uploadBackground.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    // Kiểm tra xem người dùng có chọn đúng file img1.png không
    if (file && file.name === "img1.png") {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Đặt ảnh img1.png làm nền của trang
            blurBackground.style.backgroundImage = `url(${e.target.result})`;
            blurBackground.style.backgroundSize = 'cover';
            
            // Sau khi chọn đúng nền, hiển thị trang chính
            introScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    } else {
        alert("Hãy chọn file img1.png!");
    }
});
