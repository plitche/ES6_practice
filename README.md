# ES6_practice
console.log(toString.call(변수)); //타입 확인 메소드  

1. const and let
2. Arrow functions(화살표 함수)  
3. Template Literals(템플릿 리터럴)  

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
  
4. Default parameters(기본 매개 변수)
5. Array and object destructing(배열 및 객체 비구조화)
6. Import and export(가져오기 및 내보내기)
7. Promises(프로미스)
8. Rest parameter and Spread operator(나머지 매개 변수 및 확산 연산자)
9. Classes(클래스)
  
  
