function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요")
}

const h = new Health("crong")
h.showHealth()



class Health2 {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth2() { // prototype에 저장됨
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health2("crong") // 모습만 Class이지 Function prototype이다.
myHealth.showHealth2()
console.log(toString.call(myHealth)) // function