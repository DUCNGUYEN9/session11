let styles = ["Jazz", "Blues"];

// a. Thêm phần tử “Rock-n-Roll” vào cuối mảng
console.log("Thêm phần tử “Rock-n-Roll” vào cuối mảng");

styles.push("Rock-n-Roll");
console.log(styles);

// b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng có
// tổng số phần tử là lẻ
console.log("Thay thế phần tử nằm chính giữa mảng bằng “Classics”");

if (styles.length % 2 !== 0) {
  const middleIndex = Math.floor(styles.length / 2);
  styles[middleIndex] = "Classics";

  console.log(styles);
}

// c.Xóa phần tử đầu tiên của mảng và hiển thị mảng

console.log("Xóa phần tử đầu tiên của mảng và hiển thị mảng");
styles.shift();
console.log(styles);

// d. Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị

console.log("Xóa phần tử đầu tiên của mảng và hiển thị mảng");
styles.unshift("Rap", "Reggae");
console.log(styles);
