"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = [
    {
        fname: "george",
        lname: "of the jungle",
        isMarried: true,
        children: [],
        getFullname: function () {
            return `${this.fname} ${this.lname}`;
        },
        getAge: function (doggy, horse) {
            return doggy * 10;
        }
    }
];
console.log(people[0].getFullname());
console.log(people[0].getAge(3, "george"));
