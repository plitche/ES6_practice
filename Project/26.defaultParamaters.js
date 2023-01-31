function sum(value, size) {
    size = size || 1
    return value * size
}

console.log(sum(3))



function sum2(value, size=1) {
    return value * size
}

console.log(sum2(3))


function sum3(value, size={value:1}) {
    return value * size.value
}

console.log(sum2(3, {value:1}))
console.log(sum2(3))