# ES6_practice
console.log(toString.call(타입을 체크하고 싶은 값));  

## 목차
1. const and let
2. Arrow functions(화살표 함수)  
3. Template Literals(템플릿 리터럴)  
4. Default parameters(기본 매개 변수)
5. Array and object destructing(배열 및 객체 비구조화)
6. Import and export(가져오기 및 내보내기)
7. Promises(프로미스)
8. Rest parameter and Spread operator(나머지 매개 변수 및 확산 연산자)
9. Classes(클래스)  
---  
## 1. const and let
블로스코프를 가지고 재선언 불가 재할당 가능한 let 변수 선언 키워드와 상수 선언 키원드 const가 추가되었다.  
기존 var 키워드만 있었을 때 보다 예측 가능한 코드를 작성 할 수 있게 되었다.  

## 2.Arrow functions(화살표 함수)  

화살표 함수는 javascript에서 함수를 정의하는 function 키워드 없이 함수를 만들 수 있으며,  
return 키워드 없이, 식을 계산한 값이 자동으로 반환됩니다. () 안에 함수의 인자가 들어가고,  
=> 오른쪽에는 결과를 반환하는 식입니다. es5와 es6의 방식의 코드를 비교하며 살펴보겠습니다.  
  
```js
// ---------------- ES5
function myFunc(name) {
  return "TokTokHan" + name;
}
```  
  
```js
console.log(myFunc(".dev"));
// ---------------- ES6 화살표 함수
// 함수 myFunc는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환합니다.
const myFunc = (name) => {
  return `TokTokHan ${name}`;
};
console.log(myFunc(".dev"));

// 'return' 키워드를 사용하지 않아도 됩니다
const myFunc = (name) => `TokTokHan ${name}`;
console.log(myFunc(".dev")); // 출력 => 안녕 영희

//인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있습니다.  
// 괄호를 생략하면 코드 길이를 더 줄일 수 있습니다.  
let double = (n) => n * 2;  
```  
  
## 3. Template Literals(템플릿 리터럴)  
문자열을 연결하기 위해 더하기(+) 연산자를 사용할 필요는 없으며, 백틱(`)을 사용하여 문자열 내에서 변수를 사용할 수도 있습니다.
```js
이전 문법:
// ES5
function myFunc1() {
	return '안녕' + name + '너의 나이는' + age + '살 이다!'; 
}

console.log(myFunc1('영희', 22));
// 출력 => 안녕 영희 너의 나이는 22살 이다!
```  
  
```js
새로운 ES6 문법 사용:

// ES6
const myFunc = (name, age) => {
	return `안녕 ${name}, 너의 나이는 ${age}살 이다!`; 
};

console.log(myFunc1('영희', 22));
// 출력 => 안녕 영희, 너의 나이는 22살 이다!
```  
문자열로 구성할 때 ES6의 리터럴 문자열은 ES5보다 더 체계적이고 잘 구성되어 있습니다.  
  
## 4. Default parameters(기본 매개 변수)
기존에는 함수의 매개변수에 초기화를 하려면 내부 작업이 필요했으나, ES6 에서는 필요 없어졌다.  
```js
// ES5
function myFn(a, b) {
  var a = a || 100;
    var b = b || 200;
  return a + b;
}
console.log(myFn(100)); // 300

// ES6
const myFn = (a = 100, b = 200) => a + b;
console.log(myFn()); // 300
```  
  
## 7. Promises(프로미스)
자바스크립트에서 비동기 처리를 기존에는 콜백 함수를 사용한, 콜백 패턴을 사용하였다.  
결과론적으로, 콜백헬을 발생시켰다.  
이를 해결하기 위해 프로미스가 도입되었고, 프로미스 후속처리 메소드를 이용해 에러 처리를 효과적으로 할 수 있게 되었다.  
  
  
## 9. Classes(클래스)  
비구조화를 통해 배열 또는 객체의 값을 새 변수에 더 쉽게 할당할 수 있습니다.  
```js
// ES5 문법
const contacts = {
	famillyName: '이',
	name: '영희',
	age: 22
};

let famillyName = contacts.famillyName;
let name = contacts.name;
let myAge = contacts.age;

console.log(famillyName);
console.log(name);
console.log(age);
// 출력
// 이
// 영희
// 22
```  
  
```js
// ES6 문법
const contacts = {
	famillyName: '이',
	name: '영희',
	age: 22
};

let { famillyName, name, age } = contacts;

console.log(famillyName);
console.log(name);
console.log(age);
// 출력
// 이
// 영희
// 22
```  
  
ES5에서는 각 변수에 각 값을 할당해야합니다. ES6에서는 객체의 속성을 얻기 위해 값을 중괄호 안에 넣습니다.  
> 속성 이름과 동일하지 않은 변수를 할당하면 undefined가 반환됩니다. 예를 들어, 속성의 이름이 name이고 username 변수에 할당하면 undefined를 반환합니다.  
  
우리는 항상 속성의 이름과 동일하게 변수 이름을 지정해야합니다. 그러나 변수의 이름을 바꾸려면 콜론을 :대신 사용할 수 있습니다.  
  
```js
// ES6 문법
const contacts = {
	famillyName: '이',
	name: '영희',
	age: 22
};

let { famillyName, name: ontherName, age } = contacts;

console.log(ontherName);
// 영희
배열의 경우 객체와 동일한 구문을 사용합니다. 중괄호를 대괄호로 바꾸면됩니다.

const arr = ['광희', '지수', '영철', 20];

let [value1, value2, value3] = arr;

console.log(value1);
console.log(value2);
console.log(value3);
// 출력
// 광희
// 지수
// 영철
```  
