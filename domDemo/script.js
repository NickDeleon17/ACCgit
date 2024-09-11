// alert("Connected")
let food = document.getElementById("fruit");
console.log(food);
food.style.color = "pink";
food.style.border = "teal ridge 15px";
food.style.fontSize = "36px";

let food2 = document.getElementsByClassName("breakfast");
console.log(food2[0]);

let food3 = document.getElementsByTagName("li");
console.log(food3[0]);

console.log(food3[1]);
console.log(food3[1].textContent);
food3[1].textContent = "SOLD OUT";

let food4 = document.querySelector(".breakfast");
console.log(food4);

let food5 = document.querySelectorAll("h1");
console.log(food5[1]);

// let ul = document.querySelector(ul)
// console.log(ul);
let li = document.querySelector("li");
li.innerHTML = "Chocolate <b>YUM!</b>";

document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "http://www.amazon.com");

// change textbox to password box by finding type"input" from textbox and then set attribute "type", to "password"
// let input = document.getElementsByTagName("input");
// input[0].setAttribute("type", "password")
// or like below

let input = document.querySelectorAll("[type ='text']");
// input[0].setAttribute("type", "password");

let submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // let fname = input[0].value;
    // let lname = input[1].value;
    // let age = input[2].value;
    let person = {
        fname: input[0].value,
        lname: input[1].value,
        age: Number (input[2].value)
      }
      let strPerson = JSON.stringify(person)
      console.log(strPerson);
      input[0].value = ""      
      input[1].value = ""      
      input[2].value = ""      

//       console.log(person);
// //   console.log(fname + " " + lname + " " + age );
//   input[0].value = "";
//   input[1].value = "";
//   input[2].value = "";
})