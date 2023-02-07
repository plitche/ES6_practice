//Object assign 메서드

//New로 생성자를 만들지 말고 순수한 Object는 뭐가있을까 ?
const healthObj = {
    showHealth : function() {
        console.log("오늘은 운동시간 : " + this.healthTime)
    }
}

const myHealth = Object.create(healthTime);
// 이미 Object인데 왜 굳이??

myHealth.healthTime = "11:20"
myHealth.name = "crong"

console.log(myHealth)
// 일반 Object안에 포함이 된것이 아니라 프로토타입 객체 안에 들어간 것이다.
// 하지만 아쉬운 점은 Object의 클래스 변수들을 넣어줄때는 객체의 속성으로 들어가는데, 일일이 작성해주야 한다.

// assign을 쓰면 조금더 쉽다.

const myHealth2 = Object.assign(Object.create(healthObj), {
    name: "crong",
    lastTime: "11:20"
})

console.log(myHealth2)