let obj = {
    name: 'crong',
    address : 'koreak',
    age : 10
}

let {name, age} = obj;
console.log(name, age)

 // 다른이름으로 변경 가능하다.
let {name:myName, age:myAge} = obj
console.log(myName, myAge)