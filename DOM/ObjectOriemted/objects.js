const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 343,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));