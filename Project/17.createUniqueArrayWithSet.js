let mySet = new Set();
console.log(toString.call(mySet)); // 타입 체크

// set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용

mySet.add("crong")
mySet.add("hary")
mySet.add("crong")

console.log((mySet.has('crong'))); // 존재 여부 판단

mySet.forEach(function(v){ // iterator 순회
    console.log(v)
})

mySet.delete('crong') // 삭제

mySet.forEach(function(v){
    console.log(v)
})