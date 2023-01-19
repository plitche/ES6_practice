// 개선된 Object 선언, 생성 법

const name = "crong"
const age = 33

const obj = {
    name: name,
    age: age
}

console.log(obj)


function getObj() {
    const name2 = "crong"

    const getName = function() {
        return name2;
    }

    const setName = function(newname) {
        name = newname;
    }

    const printName = function() {
        console.log(name)
    }

    // return { // object 리터럴 형태
    //     getName : getName,
    //     setName : setName
    // }

    return { // object 이름과 동일하면 생력해도 된다.
        getName, setName
    }
}

var obj2 = getObj();
console.log(obj2.getName())