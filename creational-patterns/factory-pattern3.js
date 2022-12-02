function employee(){
    this.create = function(name, id) {
        switch(type) {
           case "emp1":
             return new emp1(name, id);
           case "emp2":
             return new Truck(name, id);
           default:
        }
    }
}