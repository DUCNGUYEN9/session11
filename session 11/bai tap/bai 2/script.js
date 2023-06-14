let arrNumber = [];
let n = +prompt("Nhập số dòng (n):");
let m = +prompt("Nhập số cột (m):");

for (let i = 0; i < n; i++) {
  let subArray = [];
  for (let j = 0; j < m; j++) {
    let number = Number(
      prompt("Nhập giá trị cho phần tử arr[" + i + "][" + j + "]:")
    );
    subArray.push(number);
  }
  arrNumber.push(subArray);
}
// Chuyển mảng 2D thành mảng 1D
let flatArray = arrNumber.flat();
// Tìm giá trị lớn nhất
let max = Math.max(...flatArray);
// Tìm giá trị nhỏ nhất
let min = Math.min(...flatArray);

console.log("Mảng 2D:", arrNumber);
console.log("Mảng 1D:", flatArray);
console.log("Phần tử có giá trị lớn nhất: " + max);
console.log("Phần tử có giá trị nhỏ nhất: " + min);
