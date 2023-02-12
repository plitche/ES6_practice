
//parent
const healthObj = {
    showHealth : function() {
        console.log("오늘은 운동시간 : " + this.healthTime)
    },
    setHealth : function(newTime) {
        this.healthTime = newTime
    }
}

//child obj
const healthChildObj = {
    getAge : function() {
        return this.getAge;
    }
}

Object.setPrototypeOf(healthChildObj, healthObj)

const childObj = Object.setPrototypeOf({
    age : 22
}, healthChildObj);

console.log("childobj is ", childObj);


childObj.setHealth("11:55")
childObj.showHealth()
