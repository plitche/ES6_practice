function home() {
    const list = ['apple', 'orange', 'watermelon']
    // list = 'asdfag' // 오류 발생
    list.push('banana') // 추가가 된다.
    console.log(list)
}
// const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.

home()

// immutable array를 어떻게 만들지?
const list = ['apple', 'orange', 'watermelon']
list2 = [].concat(list, 'banana')
console.log('list > ', list)
console.log('list2 > ', list2)

// list는 불변하며 list2, list3이 생성되더라도 list는 변하지 않는다.