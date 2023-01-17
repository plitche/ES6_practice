// ES2015 String에 새로운 메서드들

let str = "hello world ! ^^ ~~"
let matchstr = 'hello'
let result = str.startsWith(matchstr) // true, false
console.log(result)

let matchstr2 = '^^ ~'
let result2 = str.endsWith(matchstr2) // true, false
console.log(result2)

let matchstr3 = 'world'
let result3 = str.includes(matchstr3) // true, false
console.log(result3)