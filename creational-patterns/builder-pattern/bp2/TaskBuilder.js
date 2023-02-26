let Task = function (name, description) {
    this.name = name;
    this.description = description;
};

let TaskBuilder = function () {
    let name;
    let description;

    this.setName = function (name) {
        this.name = name;
        return this;
    };
    this.setDescription = function (description) {
        this.description = description;
        return this;
    };

    this.build = function () {
        return new Task(this.name, this.description);
    };
    return this;
};

let task = new TaskBuilder();
let object = task
    .setName("First Task")
    .setDescription("Study React and TypeScript")
    .build();
console.log(object);
