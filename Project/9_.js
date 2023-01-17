// ES6 from method

function addMark() {
    let newData = [];

    // parameter를 받지 않아도 인자값을 arguments라는 객체로 받을 수 있다.
    // 가변적인 paramter를 받을때 사용
    for (let i=0; i<arguments.length; i++) {
        newData.push(arguments[i] + '!');
    }

    console.log(newData)
}

addMark(1,2,3,4,5)


function addMark2() {
    // arguments가 모양은 배열이지만 배열이 아니기 떄문에 .map에서 오류가 난다.
    let newData = arguments.map(function(value) {
        return value + '!'
    })

    console.log(newData)
}


function addMark3() {
    let newArray = Array.from(arguments)
    let newData = newArray.map(function(value) {
        return value + '!'
    })

    console.log(newData)
}