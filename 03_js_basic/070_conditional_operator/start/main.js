// 三項演算子（ ? : ）

const a = true;
let resultA;

if(a) {
  resultA = "true";
} else {
  resultA = "false";
}
console.log(resultA);

function getResult() {
  return 0 ? "true" : "false";
}

console.log(getResult());
