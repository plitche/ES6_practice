const healthObj = {
    showHealth : function() {
        console.log("오늘은 운동시간 : " + this.healthTime)
    },
    setHealth : function(newTime) {
        this.healthTime = newTime
    }
}

let myHealth = {
    name: "crong",
    lastTime: "11:20"
}

// myHealth라는 객체에 healthObj로 프로토타입을 추가해줘~
Object.setPrototypeOf(myHealth, healthObj)

console.log("myhealth is", myHealth)

// 반환 타입을 보면 
const newobj = Object.setPrototypeOf({
    name: "crong",
    lastTime: "11:20"
}, healthObj)

console.log(newobj);
