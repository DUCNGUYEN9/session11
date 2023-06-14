let arrNumber = [];

for (let i = 1; i <= 5; i++) {
  let number = Number(prompt("nhập số thứ " + i));
  arrNumber.push(number);
}

// Sử dụng for..in để in ra các phần tử của mảng
console.log("in ra các phần tử của mảng");
for (const key in arrNumber) {
  console.log(arrNumber[key]);
}

// Sử dụng for..of để in ra các phần tử lẻ trong mảng
console.log("in ra các phần tử lẻ trong mảng");
for (const index of arrNumber) {
  if (index % 2 != 0) {
    console.log(index);
  }
}

// Sử dung for để in ra các phần tử từ cuối lên đầu
console.log("in ra các phần tử từ cuối lên đầu");
for (let i = arrNumber.length - 1; i >= 0; i--) {
  console.log(arrNumber[i]);
}
