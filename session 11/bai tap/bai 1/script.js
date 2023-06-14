let arrNumber = [];

for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Nhập một số:"));
  arrNumber.push(number);
  if (number % 2 === 0) {
    console.log("Phần tử là số chẵn: " + number);
  }
}

console.log("Mảng ban đầu: " + arrNumber);

arrNumber.pop();
console.log("Mảng sau khi xóa phần tử cuối: " + arrNumber);

arrNumber.unshift(1, 2);
console.log("Mảng sau khi thêm 2 phần tử 1 và 2 vào đầu mảng: " + arrNumber);

arrNumber.shift();
console.log("Mảng sau khi xóa phần tử đầu tiên: " + arrNumber);
