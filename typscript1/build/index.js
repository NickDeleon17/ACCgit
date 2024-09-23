//here is an array of strings
let dogArray = ["GSD", "pug", "lab"];
//Array of numbers
let numArray = [14, 23, 35];
let movieArray = [];
//function
//data types for params and args,
//data types for returned values
const getAge = (num, fname = "nick", isMarried = false) => {
    return num * 4;
};
let result = getAge(31);
console.log(result);
