//Functions:
//Named function

function nameOfFunction() {}

//to run function call =/= invoke function
nameOfFunction();

function greeting() {
  console.log("hello!");
}

greeting();

// difference between arguments and parameters:
//arguments are sent to a function
//parameters accpet the values from the arguments

function area(length, width) {
  return length * width;
}
//invoke =/= call function to return area in this example
let result = area(2, 3);
console.log(result);

//setting default values example, default to square
function areaRectangle(length = 5, width = 5) {
  return length * width;
}
console.log(areaRectangle());
console.log(areaRectangle(6, 6));
console.log(areaRectangle(6));
//can use "undefined to default one of the values"
console.log(areaRectangle(undefined, 6));

//anon function commeted out.
// (function(){
//     console.log("Hello everbody!")
// })()

//invoke anon function
//anon function w/ callback (function within a function) will not be able to use again.

//named function to pull out function

function makeMore(element) {
  console.log(element + "'s");
}

let animals = ["sheep", "pig", "rooster"];
let multiples = (animals) => {
    let newAnimals = []
    animals.forEach(el =>{
        newAnimals.push(el + "'s")
    })
    return newAnimals
}
let manyAnimals = multiples(animals)
console.log(manyAnimals[manyAnimals.length-1])


animals.forEach(makeMore);
makeMore();

//fat arrow is the modern way to write function
//normal
function ello() {
  console.log("Hello");
}
//fat arrow
let hello = () => {
  console.log("hello");
};
hello();
ello();

let area1 = (length = 5, width = 5) => {
  return length * width;
};
console.log(area1());

//fat arrow one line:
let area2 = (length = 5, width = 5) => length * width;
//fat arrow one line with more stuff going on
let area3 = (length = 5, width = 5) => length * 2 * (width * 2);
console.log(area3());

//Destructing

