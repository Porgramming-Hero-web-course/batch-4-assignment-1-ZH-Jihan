

class Car {
    make:string;
    model:string;
    year: number;

    constructor(make:string, model:string, year: number){
        this.make = make,
        this.model = model,
        this.year = year
    }

    getCarAge(){
        const result = new Date().getFullYear() - this.year
        return `${result} (assuming current year is ${new Date().getFullYear()})`
    }

}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
