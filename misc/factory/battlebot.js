// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }

function createBattleBot(name) {
    let health = 100;
    const takeDamage = (amount) => (health - amount) > 0 ? (health -= amount) : health = 0;
    return {
        name,
        sayName() { return `Hi! I'm ${name}` },
        takeDamage,
        getHealth() { return health }
    }
}

const bot = createBattleBot('Butterscotch Bebe');
console.log(bot.sayName());
console.log(bot.getHealth());
bot.takeDamage(25);
console.log(bot.getHealth());
bot.takeDamage(100);
console.log(bot.getHealth());