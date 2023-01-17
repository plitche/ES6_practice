function home() {
    var homename = 'my house'
    console.log(homename)
    homename = 'your house'
    console.log(homename)
}

home();


function home2() {
    const HOME_NAME = 'my house'
    console.log(HOME_NAME)
    HOME_NAME = 'your house' // 오류 발생 (할당하면 안된다.)
    console.log(HOME_NAME)

    const ARRAY = [1, 2, 3];
    console.log(ARRAY)
    ARRAY = [1, 2] // 오류 발생
    console.log(ARRAY)

    // const를 기본으로 사용한다.
    // 하지만 변경이 될 수 있는 변수는 let을 사용한다.
    // var는 사용하지 않는다.
}

home2();