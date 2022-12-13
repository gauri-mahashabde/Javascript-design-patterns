function Car(name, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.turnOn = () => console.log("Car turned on")
}

function Truck(name, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.turnOn = () => console.log("Truck turned on")
}

function Motorcycle(name, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.turnOn = () => console.log("Motorcycle turned on")
}

const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car("Car", 4);
            case "truck":
                return new Truck("Truck", 8);
            case "motorcycle":
                return new Motorcycle("Motorcycle", 2);
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car");
const truck = vehicleFactory.createVehicle("truck");
const motorcycle = vehicleFactory.createVehicle("motorcycle");
car.turnOn();
truck.turnOn();
motorcycle.turnOn();
