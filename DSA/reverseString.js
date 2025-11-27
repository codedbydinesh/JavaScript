

let str = "hello world";

function reverseStr(str){
  let temp = '';
  for (const value of str) {
    temp = value + temp;
  }
  return temp;
}

console.log(reverseStr(str));