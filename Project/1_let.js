var name = 'global var';

function home() {
    var homevar = 'homevar';
    // for (var i=0; i<100; i++) {
    // }
    for (let i=0; i<100; i++) { // 지역 변수(block 단위 스코프)

    }
    console.log(i)

    if(true) {
        let myif = 'myif';
    }
    
    console.log(myif)
}

home();