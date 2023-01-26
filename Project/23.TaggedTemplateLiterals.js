const data = [
    {
        name: 'coffee-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false
    }
]

const template = `<div>welcome ${data[0].name}</div>
                <h2>주문가능항목</h2><div>${data[0].items}</div>`
// data의 index 0의 배열에는 items가 있기 때문에 문제가 없지만 1번째에는 없다.
console.log(template)

// 없을때에는 undefined가 나온다.
const template2 = `<div>welcome ${data[0].name}</div>
                <h2>주문가능항목</h2><div>${data[0].items}</div>`
console.log(template2)

// Tagged template literals
function fn(tags, name, items) {
    // tags : 배열
    // name : data[0].name
    // items : data[0].items
    console.log(tags)
    if (typeof items === "undefined") {
        items = "<span style='color:red'>주문 가능한 상품이 없습니다.</span>"
    }
    return (tags[0] + name + tags[1] + items + tags[2])
}

const template3 = fn`<div>welcome ${data[0].name}</div>
                <h2>주문가능항목</h2><div>${data[1].items}</div>`

console.log(template3)

data.forEach((v) => {
    const template4 = fn`<div>welcome ${v.name}</div>
                <h2>주문가능항목</h2><div>${v.items}</div>`
    console.log(template4)
})