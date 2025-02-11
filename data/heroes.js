function Hero (name,power,description) {
    this.namename = name;
    this.power =power;
    this.description = description;
}

let Heroes = [
    new Hero("Hercules", "super Strength", "Hercules complete 12 tasks in his adventures"),
    new Hero("odyssues", "Cliever", "odyssus built of Greek Mythology!!!")
]

export default Heroes;