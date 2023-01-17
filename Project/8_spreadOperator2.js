// spread operator

let pre = [100, 200, 'hello', null]
let newData = [0, 1, 2, 3, ...pre,  4]

function sum(a, b, c) {
    return a+b+c;
}

let pre2 = [100, 200, 300]
sum(pre2[0], pre2[1], pre2[2]);
// =>
sum.apply(null, pre2)
// =>
sum(...pre2)