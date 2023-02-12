//Object assign 메서드

const previousObj = {
    name: "crong",
    lastTime: "11:20"
}

let myHealth = Object.assign({}, previousObj, { // 이전 Object값을 다 추출 후
    "lastTime" : "12:30", // 새로운 값이 있으면 대체
    "name" : "honux",
    "age" : 99
});

console.log(previousObj)
console.log(myHealth)
console.log(previousObj === myHealth) // false

myHealth = Object.assign({}, previousObj, {})
console.log(previousObj === myHealth) // false
// value(값)은 같지만 일치하는 객체는 아니다.







