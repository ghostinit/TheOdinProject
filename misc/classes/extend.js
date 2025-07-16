class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    get year() {
        return this._year;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    set year(year) {
        this._year = year;
    }

    set make(make) {
        this._make = make;
    }

    set model(model) {
        this._model = model;
    }
}


class FourByFour extends Car {
    constructor(make, model, year, liftHeight, wheelBase) {
        super(make, model, year);
        this.liftHeight = liftHeight;
        this.wheelBase = wheelBase;
    }

    get liftHeight() {
        return this._liftHeight;
    }

    get wheelBase() {
        return this._wheelBase;
    }

    set liftHeight(liftHeight) {
        this._liftHeight = liftHeight;
    }

    set wheelBase(wheelBase) {
        this._wheelBase = wheelBase;
    }
}

const jeep = new FourByFour('Jeep', 'Wrangler', 2013, 42, 80);

console.log(jeep.make);
console.log(jeep.model);
console.log(jeep.year);
console.log(jeep.liftHeight);
console.log(jeep.wheelBase);