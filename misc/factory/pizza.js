function createPizza(size) {
    let toppings = [];
    return {
        size,
        addTopping(topping) {
            toppings.push(topping);
        },
        listToppings() {
            return toppings;
        },
        describePizza() {
            return `A ${size} pizza with: ${toppings.join(', ')}`;
        }
    }
}

const myPizza = createPizza('large');
myPizza.addTopping("extra cheese");
myPizza.addTopping("pepperoni");
console.log(myPizza.listToppings());
myPizza.addTopping("peppers");
console.log(myPizza.describePizza());