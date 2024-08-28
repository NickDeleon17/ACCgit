//create an array
let pets = ['Moxie', 'pickle', 'hootchie'];

//display elelment 0
console.log(pets[0]);

//dipslay all elemnts in array
console.log(pets);

//number of elemetns in array
console.log(pets.length);

//add 3 to elements in array and assign to num , display num
let num = pets.length + 3
console.log(num);


pets.toString();

let position = pets.includes("moxie");
console.log(position);

//add fido to array
pets.push('fido');
console.log(pets);

//view a portion of elements in array
pets.slice(2,3);
console.log(pets);

//remove last entered element in array
pets.pop()
console.log(pets);


// pets.shift();
// console.log(pets);

//for loop in JS
let numbers = [1,2,3,4,5];
for (var i = 0 ; i < numbers.length; i++) {
    numbers[i] = numbers[i]*2
}
console.log(numbers);


//iterating over an array - calls a fucntion once for each elelment in an array in order.
pets.forEach(function (element){
    console.log(element);
})

//map() mapping changes the array
// let number = [2,4,6,8]
// var square = pets.map(num1 => num1*num1);
// console.log(num1);

//sort either alpha or numeric in asc or desc and will sort
    //pets.sort(); or
console.log(pets.sort());

//seting array of numbers and sorting in ascending order through a long function
let numbs =[100, 10,4,1,3]
let newNumbers = numbs.sort((a, b)=> a-b)
console.log(numbs);
//when dealing with objects use .notation

//filter creates an array filled with all array elemetns that pass a test *does not affect original array

let words =['spray', 'limit', 'elite', 'exuberant', 'destructive', 'present'];
// var longWords = words.filter(function(thisword){
//     return thisword.length > 6;
// });
// console.log(longWords);

// above as a long arrow function
let longWord = words.filter(el => el.length >6)
console.log(longWord);
