// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }

function createCar(make, model, year) {
    const drive = function () {
        console.log(`Driving a ${year} ${make} ${model}`)
    }
    return { make, model, year, drive }
}

let myCar = createCar('Pontiac', 'Firebird', 1968);

myCar.drive();