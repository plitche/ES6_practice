var data = [1, 2, undefined, NaN, null, ""]

for (var i=0; i<data.length; i++) {
    console.log(data[i])
}

data.forEach(function(value) {
    console.log("value : " + value)
})

Array.prototype.getIndex = function() {}
for (let idx in data) {
    console.log(data[idx])
}

// 본인이 가지고 있지 않은 값을 출력하지 않는다. for in 의 실수를 줄이기 위해
for (let value of data) {
    console.log(value)
}

var str = "hello world!!!"
for (let value of str) {
    console.log(value)
}