function identity(param) {
  return param
}

function identityF(param) {
    let ans = ()=> param
    return ans
}

function add(num1, num2) {
  return num1 + num2
} 

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function increment(num1) {
  const answer = identity(num1) + 1
  return answer

}

function addF(num1) {
  let ans = (num2)=> num1 + num2
    return ans
}

function curry(binaryFunc, num1) {
  let ans = (num2)=> binaryFunc(num1, num2)
  return ans
}

function liftF(func1) {
  let ans = (num1)=> (num2) => func1(num1,num2)
  return ans
}

function twice() {}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
