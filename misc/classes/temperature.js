class TemperatureCelsius {

    // Class is purposed to hold temp in C by default
    constructor(initialTempC = 0) {
        this.tempCelcius = initialTempC;
        this.units = {
            celsius: 0,
            fahrenheit: 1
        }
    }

    get fahrenheit() {
        return this.tempCelcius * 9 / 5 + 32;
    }

    get celsius() {
        return this.tempCelcius;
    }

    set fahrenheit(tempF) {
        this.tempCelcius = (tempF - 32) * 5 / 9;
    }

    set celsius(tempC) {
        this.tempCelcius = tempC;
    }

}

const myTemp = new TemperatureCelsius(0);

console.log(myTemp.celsius); // expect 0
console.log(myTemp.fahrenheit); // expect 32

myTemp.celsius = -40;

console.log(myTemp.celsius); // expect -40
console.log(myTemp.fahrenheit); // expect -40

myTemp.fahrenheit = 212;

console.log(myTemp.celsius); // expect 100
console.log(myTemp.fahrenheit); // expect 212