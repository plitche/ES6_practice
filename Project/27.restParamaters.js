// rest parameters
function checkNum() { // 인자가 몇개가 들어올지 모를 때
    const argArray = Array.prototype.slice.call(arguments) // 내장 변수 argument 하지만 배열이 아니다.
    // console.log(argArray)
    // return toString.call(argArray);
    const result = argArray.every((v) => typeof v === 'number') // 모두 true일 경우에만 true를 반환
    return result
}

const result = checkNum(10, 2, 3, 4, 5, '55')
console.log(result)
const result2 = checkNum(10, 2, '55')
console.log(result2)

// 위는 가짜배열 아래는 진짜배열


// 매개변수에 ...이 있으면 배열, 아니면 spread operator이다.
function checkNum(...argArray) { 
    // console.log(toString.call(argArray))
    const result = argArray.every((v) => typeof v === 'number')
    return result
}

const result3 = checkNum(10, 2, 3, 4, 5, '55')
console.log(result3)
const result4 = checkNum(10, 2, '55')
console.log(result4)