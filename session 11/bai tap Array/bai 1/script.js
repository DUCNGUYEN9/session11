let arrInt = [];

// cau a
for (let i = 1; i <= 5; i++) {
  let number = Number(prompt("nhập số thứ " + i));
  arrInt.push(number);
}
// cau b Hiển thị giá trị các phần tử của mảng
console.log("Hiển thị giá trị các phần tử của mảng");
for (const index of arrInt) {
  console.log(index);
}
// c. In các phần tử có giá trị chẵn và tính tổng
console.log("In các phần tử có giá trị chẵn và tính tổng");
let sumEven = 0;
for (const index of arrInt) {
  if (index % 2 == 0) {
    console.log("phần tử có giá trị chẵn " + index);
    sumEven += index;
  }
}
console.log("phần tử  tổng cua giá trị chẵn  " + sumEven);

// d. In các phần tử có chỉ số lẻ và tính tổng
console.log("In các phần tử có chỉ số lẻ và tính tổng");
let sumOdd = 0;
for (const index in arrInt) {
  if (index % 2 != 0) {
    console.log("phần tử có chỉ số lẻ " + arrInt[index]);
    sumOdd += arrInt[index];
  }
}
console.log("phần tử  tổng cua chỉ số lẻ  " + sumOdd);

// e. In giá trị các phần tử trong mảng là số nguyên tố
console.log("Các số nguyên tố trong mảng:");
for (const value of arrInt) {
  let isPrime = true;
  if (value === 1) {
    isPrime = false;
  } else if (value > 1) {
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false;
  }

  if (isPrime) {
    console.log(value);
  }
}
// f. In các phần tử có giá trị là max hoặc min
let max = arrInt[0];
let min = arrInt[0];

for (const value of arrInt) {
  if (value > max) {
    max = value;
  }
  if (value < min) {
    min = value;
  }
}
console.log(" max : " + max);
console.log(" min : " + min);

// g. Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp
// xếp
console.log("mảng giảm dần: ");
debugger;
for (let i = 0; i < arrInt.length - 1; i++) {
  for (let j = 0; j < arrInt.length - i - 1; j++) {
    if (arrInt[j] < arrInt[j + 1]) {
      // Swap elements
      let temp = arrInt[j];
      arrInt[j] = arrInt[j + 1];
      arrInt[j + 1] = temp;
    }
  }
}
console.log(arrInt);

// h. Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá
// trị như vậy
let count = 0;
let number = Number(prompt("enter a number "));
for (const index of arrInt) {
  if (index == number) {
    count++;
  }
}
console.log(`Có ${count} phần tử có giá trị ${number} trong mảng.`);
