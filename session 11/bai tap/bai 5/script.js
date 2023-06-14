const text = document.getElementById("text");

const fixedText = "I'm is Robot? Are you aright?";

let currentIndex = 0;

text.addEventListener("keydown", (event) => {
  // Ngăn chặn sự kiện mặc định của phím để tránh hiệu ứng nhảy dòng
  event.preventDefault();

  // Kiểm tra nếu đã gõ đủ số ký tự trong dòng chữ cố định
  if (currentIndex === fixedText.length) {
    currentIndex = 0;

    // Xóa nội dung trong phần tử HTML
    text.textContent = "";
  }

  // Lấy ký tự tiếp theo trong dòng chữ cố định
  const nextChar = fixedText.charAt(currentIndex);

  // Cập nhật nội dung trong phần tử HTML
  text.textContent += nextChar;

  currentIndex++;
});
