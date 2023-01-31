// this context of Arrow function

const myObj = {
    runTimeout() {
        setTimeout(function() {
            console.log(this === window)
        }, 200)
    }
}

myObj.runTimeout(); // true


const myObj2 = {
    runTimeout() {
        setTimeout(function() {
            this.printData(); // 여기서 this가 가르키는것이 window이기 때문에 obj를 가르키려면 bind 사용
        }.bind(this), 200)
    },

    printData() {
        console.log('hi codesquad')
    }
}

myObj2.runTimeout(); // true

const myObj3 = {
    runTimeout() {
        setTimeout( () => {
            this.printData(); // 여기서 this는 bind를 하지 않아도 obj를 가리킨다
        }, 200)
    },

    printData() {
        console.log('hi codesquad')
    }
}

myObj3.runTimeout(); // true