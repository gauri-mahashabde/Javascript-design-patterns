// https://www.geeksforgeeks.org/javascript-design-patterns/

function mainDisplayFunction() {
    this.getData = function (name) {
        if (name === "ABC") return 20000;
        else if (name === "DEF") return 5000;
        else return 0;
    };
}

function proxyDisplayFunction() {
    let object_1 = new mainDisplayFunction();
    let result_object = {};
    return {
        getData: function (name) {
            if (!result_object[name]) {
                result_object[name] = object_1.getData(name);
            }
            console.log(name + ": " + result_object[name]);
            return result_object[name];
        },
    };
}

function mainFunction() {
    let main_object = new proxyDisplayFunction();
    main_object.getData("ABC");
    main_object.getData("DEF");
    main_object.getData("Apple");
}

mainFunction();
