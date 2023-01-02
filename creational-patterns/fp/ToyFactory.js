function ToyFactory() {
    this.toy = ToyDuck;
    this.createToy = function (toyChosen) {
        if (toyChosen.toyType == "duck") {
            this.toy = ToyDuck;
        } else if (toyChosen.toyType == "car") {
            this.toy = ToyCar;
        }
        return new this.toy(toyChosen);
    }
}

function ToyDuck(toyObj) {
    this.color = toyObj.color;
    this.price = toyObj.price;
}

function ToyCar(toyObj) {
    this.color = toyObj.color;
    this.price = toyObj.price;
    this.name = toyObj.name;
}

var toyFactory = new ToyFactory();
var car = toyFactory.createToy({
    toyType: "car",
    color: "blue",
    price: 12,
    name: "honda"
})

console.log(car)
console.log(car instanceof ToyCar)

var duck = toyFactory.createToy({
    toyType: "duck",
    color: "yellow",
    price: 5,
})

console.log(duck)
console.log(duck instanceof ToyDuck)

