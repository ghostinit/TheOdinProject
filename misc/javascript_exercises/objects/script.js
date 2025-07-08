// // The task has two parts.

// // Given the following objects:

// let head = {
//     glasses: 1
// };

// let table = {
//     __proto__: head,
//     pen: 3
// };

// let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     __proto__: bed,
//     money: 2000
// };
// // Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// // Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

// // console.log(pockets.pen);
// // console.log(bed.glasses);


// for (let i = 0; i < 5; i++) {
//     const pocketGlassesStart = performance.now();
//     console.log(pockets.glasses);
//     const pocketGlassesEnd = performance.now();

//     const headGlassesStart = performance.now();
//     console.log(head.glasses);
//     const headGlassesEnd = performance.now()

//     const pocketGlassesTime = pocketGlassesEnd - pocketGlassesStart;
//     const headGlassesTime = headGlassesEnd - headGlassesStart;

//     console.log(`Took ${pocketGlassesTime} ms to get glasses from pocket`);
//     console.log(`Took ${headGlassesTime} ms to get glasses from head`);
// }



// ============================== NEXT TASK


// Where does it write?
// importance: 5
// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
// // ANSWER: RABBIT!
// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// =============================== NEXT TASK

// Why are both hamsters full?
// importance: 5
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// let hamster = {
//     // stomach: [],

//     eat(food) {
//         this.stomach.push(food);
//     }
// };


// function HamsterFactory(name) {
//     let hamsterClone = {
//         __proto__: hamster,
//         name: name,
//         stomach: []
//     }
//     return hamsterClone;
// }

// let speedy = HamsterFactory('speedy');
// let lazy = HamsterFactory('lazy');

// // let speedy = {
// //     __proto__: hamster,
// //     stomach: []
// // };

// // let lazy = {
// //     __proto__: hamster,
// //     stomach: []
// // };

// // This one found the food
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // This one also has it, why? fix please.
// console.log(lazy.stomach); // apple

// function Foo() {
//     this.evil = function SubFoo() {
//         this.sorcery = "Evil Magic";
//     }
// }

// console.log(`Foo.__proto__ = ${Foo.__proto__}`);
// console.log(`Foo.prototype = ${Foo.prototype}`);
// // console.log(`Foo.evil.__proto__ = ${Foo.evil.__proto__}`);
// // console.log(`Foo.evil.prototype = ${Foo.evil.prototype}`);

// const bar = new Foo();

// console.log(`bar.__proto__ = ${bar.__proto__}`);
// console.log(`bar.prototype = ${bar.prototype}`);
// console.log(`bar.evil.__proto__ = ${bar.evil.__proto__}`);
// console.log(`bar.evil.prototype = ${bar.evil.prototype}`);

// const evilFoo = new bar.evil();

// console.log(`evilFoo.__proto__ = ${evilFoo.__proto__}`);
// console.log(`evilFoo.prototype = ${evilFoo.prototype}`);

function User(name) {
    this.name = name;
    console.log(this);
}

const me = new User("Me!");
const you = new User("you!");
