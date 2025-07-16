// function Counter() {
//     let count = 0;
//     return function () {
//         count += 1;
//         return count;
//     }
// }

const IIFECounter = (
    function () {
        let count = 0;
        return {
            increment() {
                count += 1;
            },
            decrement() {
                count -= 1;
            },
            getCount() {
                return count;
            }
        }
    }
)();

counterA = IIFECounter;
counterA.increment();
counterA.increment();
console.log(counterA.getCount());

counterB = IIFECounter;
console.log(counterB.getCount());



// const c = Counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// const b = Counter();
// console.log(b());