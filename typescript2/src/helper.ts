type Person = {
    fname: string;
    lname: string;
    isMarried?: boolean;
    children: any[]
    getFullname: ()=> string;       //declare full name function as fat arrow, write the function in index.ts
    getAge: (num: number, fname)=> number;
}

export{Person}