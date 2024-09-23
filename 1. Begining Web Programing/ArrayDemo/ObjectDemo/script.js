//building an object "dog"
let dog = {
    breed: "Bulldog",
    name: "fido",
    family: ['mom', 'dad', 'sister'],
    age: 4,
    isMarried: false
}
console.log(dog);

console.log(dog.isMarried);
console.log(dog['isMarried']);
let typeOfDog = 'breed'
//retrive using .method dog.typeOfDog
console.log(dog.typeOfDog);
//retrieve using bracket method dog[typeOfDog]
console.log(dog[typeOfDog]);
console.log(dog.family[2]);