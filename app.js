class Telephone{
    constructor() {
        this.observers = [];
        this.phoneNumbers = [];
    }

    // --------------------THE 3 PUBLIC METHOD FOR ADDING, REMOVING AND DIALLING PHONENUMBER--------------

    addPhoneNumber(number) {
        if(isNaN(number) || (number.length > 0 && number.trim().length == 0) || number.length == 0){
            console.log("Please put in a valid number")
        }else {
            this.phoneNumbers.push(number)
        }
       
    }

    removePhoneNumber(number){
        var index = this.phoneNumbers.indexOf(number)
        if(index > -1){
            this.phoneNumbers.splice(index, 1);
        }else{
            console.log("This phone number is invalid")
        }
    }

    dialPhoneNumber(number){
        var index = this.phoneNumbers.indexOf(number)
        if(index > -1){
            this.notifyObservers(number)
        }else{
            console.log(`This phone number is invalid \nAdd the number first`)
        }
    }

    // ------------------------------------METHOD TO ADD, REMOVE AND NOTIFY OBSERVERS---------------------

    addObserver(observer){
        if(observer.length == 0 || (observer.length > 0 && observer.trim().length == 0)){
            console.log("Please Put in a valid Observer")
        }else{
            this.observers.push(observer)
        }
        
    }

    removeObserver(observer){
        var index = this.observers.indexOf(observer)
        if(index > -1){
            this.observers.splice(index, 1);
        }else{
            console.log("This observer does not exist")
        }
    }

    notifyObservers(number){
        this.observers.forEach(observer => {
            return observer.update(number)
        }) 
    }


}

class Observer{
    constructor(name){
        this.name = name;
    }

    update(event){

    }
}

class PrintNumber extends Observer{
    constructor(name){
        super(name)
    }

    update(event){
        console.log(`${event} printed to ${this.name}`)
    }
}

class NotifyDialNumber extends Observer{
    constructor(name){
        super(name)
        
    }

    update(event){
        console.log(`${this.name} was notified of Now Dialling ${event}`)
    }
}

let observer1 = new PrintNumber("John")
let observer2 = new NotifyDialNumber("Adaobi")

const phone = new Telephone();

phone.addObserver(observer1)
phone.addObserver(observer2)


phone.addPhoneNumber(09043991245)

phone.dialPhoneNumber(09043991245)



