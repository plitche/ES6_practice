//arrow function
setTimeout(function() { // callback 함수 : 나중에 실행되는 함수
    console.log('settimeout')
}, 1000)

setTimeout( () => {
    console.log('settimeout arrow')
}, 1000)

let newArr = [1,2,3,4,5].map(function(value, index, object) {
    return value * 2
})
console.log(newArr)


let newArr2 = [1,2,3,4,5].map( (v) => {
    return v * 2
})
console.log(newArr2)

let newArr3 = [1,2,3,4,5].map( (v) => v * 2 ) 
console.log(newArr3)