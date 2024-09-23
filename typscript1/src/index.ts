//here is an array of strings
let dogArray: string[] = ["GSD", "pug", "lab"];
//Array of numbers
let numArray = [14,23,35];
let movieArray: object[] = [];

//function
//data types for params and args,
//data types for returned values
const getAge = (num: number, fname: string ="nick", isMarried: boolean = false): number => {
    return num *4;
};
let result = getAge(31);
console.log(result);
