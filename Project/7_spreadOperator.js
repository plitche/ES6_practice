// spread operator

let pre = ['apple', 'orange', 100]
let newData = [...pre] //
console.log(newData)
console.log(pre === newData) // false 참조를 끊고 복사를 해서 새롭게 생성
