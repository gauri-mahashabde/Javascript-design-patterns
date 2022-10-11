function garmentFactory(type, material, color) {
    return {
        type, material, color
    }
}

const shirt = garmentFactory("shirt", "nylon", "blue");
const pant = garmentFactory("pant", "jeans", "black");