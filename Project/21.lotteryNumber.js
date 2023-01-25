// Destructuring and set 활용
// 1. 유일한 값을 추출하는 과정에서 Set을 사용
// 2. getRandomNumber함수에 변수를 전달하는 과정에서 destructing을 사용


const SETTING = {
    name: 'LUCKY LOTTO!',
    count : 6,
    maxNumber : 45
}

/*
let numbers = new Set;

function getRandomNumber(maxNumber) {
    numbers.add(Math.round(Math.random() * maxNumber)) + 1 
}

for (let i=0; i<SETTING.count; i++) {
    getRandomNumber(SETTING.maxNumber);
}

console.log(colorSet.value())
*/

let numbers = new Set;

function getRandomNumber(maxNumber) {
    numbers.add(Math.round(Math.random() * maxNumber)) + 1 
}

for (let i=0; i<SETTING.count; i++) {
    getRandomNumber(SETTING.maxNumber);
}

console.log(colorSet.value())