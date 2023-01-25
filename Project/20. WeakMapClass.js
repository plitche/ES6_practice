// WeakMap 활용

// 인스턴스 관리를 WEakMap을 이용해서 가능하다.
const wm = new WeakMap();

function Area(height, width) {
    // this.height = height;
    // this.width = width;
    wm.set(this, {height, width})
}

Area.prototype.getArea = function() {
    // return this.height * this.width
    const {height, width} = wm.get(this)
    return height * width;
}

let myArea = new Area(10, 20);
console.log(myArea.getArea())
console.log(myArea.height) // weakMap을 이용하면 접근이 안됨.

myArea = null;
console.log(wm) // 인스턴스 초기화를 해도 값은 있는 것 처럼 보인다.
console.log(wm.has(myArea)) // false


const obj = {};

function Area2(height, width) {
    // obj['height'] = height
    // obj['width'] = width

    obj.height = height
    obj.width = width
}

Area2.prototype.getArea = function() {
    return obj.height * obj.height;
}

console.log(myArea.getArea())