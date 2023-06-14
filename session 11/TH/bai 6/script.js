// bai 1 Viết một chương trình JavaScript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau
let myColor = ["Red", "green", "white", "black"];
console.log("'" + myColor.toString() + "'");
//  bai 2 Viết một chương trình nhận một số nhập vào và chèn dấu (_) giữa 2 số chẵn.
const num = window.prompt("nhập vào dãy số bất kì");
const str = num.toString();
const result = [str[0]];
for (let x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-", str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));
// bai 3  Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
let str3 = window.prompt("nhập vào chữ viết hoa và thường bất kì");
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const result3 = [];

for (let x = 0; x < str3.length; x++) {
  if (UPPER.indexOf(str3[x]) !== -1) {
    result3.push(str3[x].toLowerCase());
  } else if (LOWER.indexOf(str3[x]) !== -1) {
    result3.push(str3[x].toUpperCase());
  } else {
    result3.push(str3[x]);
  }
}
console.log(result3.join(""));
