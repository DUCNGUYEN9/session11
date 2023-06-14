// Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b.
// Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và
// b

let arrInt = [];
let a = Number(prompt("Nhập vào số nguyên a"));
let b = Number(prompt("Nhập vào số nguyên b"));

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

for (let i = a + 1; i < b; i++) {
  arrInt.push(i);
}
arrInt.unshift(a);
arrInt.push(b);
console.log(arrInt);
