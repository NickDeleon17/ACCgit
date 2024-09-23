// type Person = {
//     fname: string;
//     lname: string;
//     isMarried: boolean;
//     children: string[]
// }
import {Person} from "./helper"

let people: Person[]=[
    {
        fname: "george",
        lname: "of the jungle",
        isMarried: true,
        children: [],
        getFullname: function(){        //concat first and last name by writing the function delcared in the helper file.
            return `${this.fname} ${this.lname}`
        },
        getAge: function(doggy, horse){
            return doggy*10;
        }
    }
]
console.log(people[0].getFullname());
console.log(people[0].getAge(3, "george"));

