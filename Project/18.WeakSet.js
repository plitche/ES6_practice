// 참조를 가지고 있는 개체만 저장이 가능하다.
// 객체 형태를 중복없이 저장하려고 할 때 유용하다.

let arr = [1,2,3,4];
let weakSet = new WeakSet();

weakSet.add(arr)
console.log(weakSet)

// weakSet.add(111) invalid value used 오류 발생
// weakSet.add("111") invalid value used 오류 발생
// weakSet.add(null) invalid value used 오류 발생
// console.log(weakSet) 

weakSet.add(function(){});
console.log(weakSet)


let arr2 = [5, 6, 7, 8]
let obj = {arr, arr2}
weakSet.add(arr2);
weakSet.add(obj);
console.log(weakSet)

arr = null
console.log(weakSet) 
// arr이 존재하는 것처럼 보인다. 왜냐하면 참조를 보기 때문에
// arr는 가비지 컬렉션 대상이다

console.log(weakSet.has(arr)) // false
console.log(weakSet.has(arr2)) // true




