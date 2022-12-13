/**

The Builder pattern is used to create objects in "steps". Normally we will have functions or 
methods that add certain properties or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

*/

const user1 = {
    name: "Lakshmikant",
    role: "Distinguished Engineer"
}

const user2 = {
    name: "Sachin",
    role: "Software Engineer"
}

const systemAccess = obj => {
    obj.adminAccess = () => console.log(`${obj.name} has admin access`)
}

const readRepo = obj => {
    obj.readAcess = () => console.log(`${obj.name} has read only access`)
}

systemAccess(user1)
user1.adminAccess();

readRepo(user2)
user2.readAcess();