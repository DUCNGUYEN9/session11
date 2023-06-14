let arrInt = [];
let rowN = Number(prompt("nhập số dòng n"));
let colM = Number(prompt("nhập số cột m"));
// a. Nhập giá trị các phần tử của mảng từ bàn phím
for (let i = 0; i < rowN; i++) {
  let arrRow = [];
  for (let j = 0; j < colM; j++) {
    let element = Number(
      prompt("nhập vào các phần tử của dòng " + [i] + " cột " + [j])
    );
    arrRow.push(element);
  }
  arrInt.push(arrRow);
}
console.log(arrInt);

// b. In giá trị các phần tử của mảng
console.log("giá trị các phần tử của mảng");
for (const value of arrInt) {
  console.log(value);
}
// c. In giá trị các phần tử nằm trên đường biên (Coi mảng 2 chiều là ma
// trận)
console.log("các phần tử nằm trên đường biên :");
for (let i = 0; i < arrInt.length; i++) {
  for (let j = 0; j < arrInt[i].length; j++) {
    // Kiểm tra nếu phần tử nằm trên đường biên
    if (
      i === 0 ||
      i === arrInt.length - 1 ||
      j === 0 ||
      j === arrInt[i].length - 1
    ) {
      console.log(arrInt[i][j]);
    }
  }
}
// d. In giá trị các phần tử nằm trên đường chéo chính và phụ
if (rowN == colM) {
  console.log("các phần tử nằm trên đường chéo chính và phụ :");
  for (let i = 0; i < arrInt.length; i++) {
    for (let j = 0; j < arrInt[i].length; j++) {
      if (i === j) {
        console.log("phần tử nằm trên đường chéo chính:  " + arrInt[i][j]);
      }
    }
  }
  for (let i = 0; i < arrInt.length; i++) {
    for (let j = 0; j < arrInt[i].length; j++) {
      if (i + j === arrInt.length - 1) {
        console.log("phần tử nằm trên đường chéo phụ:  " + arrInt[i][j]);
      }
    }
  }
} else {
  console.log("không có đường chéo chính và phụ");
}

// e. Sắp xếp mảng tăng dần theo dòng (không và có sử dụng hàm sort)
console.log("Sắp xếp mảng tăng dần theo dòng");
for (let i = 0; i < arrInt.length; i++) {
  for (let j = 0; j < arrInt[i].length - 1; j++) {
    for (let k = 0; k < arrInt[i].length - j - 1; k++) {
      if (arrInt[i][k] > arrInt[i][k + 1]) {
        // Swap giá trị
        let temp = arrInt[i][k];
        arrInt[i][k] = arrInt[i][k + 1];
        arrInt[i][k + 1] = temp;
      }
    }
  }
}
for (const value of arrInt) {
  console.log(value);
}
