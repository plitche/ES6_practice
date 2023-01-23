// Array -> set, WeakSet
// Object -> map, WeakMap

// map은 key, value 구조

let wm = new WeakMap();
let myFun = function(){};
// 이 함수가 얼마나 실행됐지? 를 알려고 할때

wm.set(myFun, 0);
console.log(wm) // WeakMap {function => 0}

let count = 0;
for (let i=0; i<10; i++) {
    count = wm.get(myFun) // get value
    count++
    wm.set(myFun, count)
}

console.log(wm)
console.log(wm.get(myFun))

myFun = null;
console.log(wm.get(myFun))
console.log(wm.has(myFun))