// assignment No 1

class personalAccount {
    constructor(firstName,lastName,incomes,expenses,discription){
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.incomes = [
            {incomes : " " },
            {discription : " "}
        ] ;
        this.expenses = [
            {incomes : " " },
            {discription : " "}
        ] ;

    }

    totalIncome (){

    }
    
    totalExpense (){

    }

    addIncome(){

    }

    addExpense(){
        
    }

    accountBalance(){

    }

}

let moiz = new personalAccount("moiz","ali",100,2000,"hellow world");

console.log(moiz);

// assignment No 2

class automobile {
    constructor (name, model, color ,type ,automatic ,manual){
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
        this.automatic = automatic;
        this.manual = manual;
    }

    start(){
        console.log("Car is ready for drive");
    }

    opendoor(){
        console.log("door is open");
    }

}

class car extends automobile {

    constructor (name, model, color ,type ,automatic ,manual,doors,maxspeed){
        this.doors = doors ;
        this.maxspeed = maxspeed ;
    }
}

class truck extends automobile {

    constructor (name, model, color ,type ,automatic ,manual,doors,maxspeed,wheels){
        this.doors = doors ;
        this.maxspeed = maxspeed ;
        this.wheels = wheels ;
    }
}

class bus extends automobile {

    constructor (name, model, color ,type ,automatic ,manual,doors,maxspeed,seats){
        this.doors = doors ;
        this.maxspeed = maxspeed ;
        this.seats = seats ;

    }
}

let Civic = new automobile();

Civic.start();





