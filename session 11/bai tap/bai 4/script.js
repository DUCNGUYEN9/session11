let output = document.getElementById("output");
let input = document.getElementById("input");
let button = document.getElementById("button");

let english = ["Hello", "Ok", "Apple"];
let vietNam = ["xin Chào", "đồng ý", "quả táo"];

button.addEventListener("click", () => {
  let text = input.value;
  let result = "Not Value";

  for (let i = 0; i < english.length; i++) {
    if (english[i] === text) {
      result = vietNam[i];
      break;
    }
  }

  output.innerHTML = result;
  input.value = "";
});
