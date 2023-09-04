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

function once(func1) {
  let count = 0
  let repeatAnswer
  function ans() {
    if (count === 0) {
      repeatAnswer = func1()
      count++
      return repeatAnswer
    }
    return repeatAnswer
  }
  return ans
}

function twice(func1) {
  function innerFunc(num) {
    return func1(num, num)
  }
  return innerFunc
}

function composeU(func1, func2) {
  function func3(num) {
    return func2(func1(num))
  }
  return func3
}

function composeB(func1, func2) {
  function func3(num1, num2, num3) {
    return func2(func1(num1,num2),num3)
  }
  return func3
}

function limit(func1, num1) {
  let count = 0
  function nestAdd (num2, num3) {
    if (count < num1) {
      count++
    const answer = func1(num2, num3)
    return answer
  } else {
  }
} return nestAdd
}

function from(num1) {
  let count = num1
  function nestedCount() {
    const unInc = count
    count++
    return unInc
  } return nestedCount
}

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
  once,
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
