// //string
// let person = "tutu";
// person = "kyaw kyaw";

// //number
// let age = 20;
// age = 22;

// //boolean
// let passed= false;
// passed = true;

//array 
let parson = ["arker", "leopico", "leo"];
parson.push("hla hla");
console.log(parson);

let number = [11, 22, 33, 44, 55]
number.push(66);
// num.push("77"); //can not push true cause of do not include string value in initial valuable
console.log(number);

let strnum = ['arker', 'leo', 10, 20];
strnum.push("kyaw kyaw");
strnum.push(30)
// strnum.push(true); //can not push true cause of do not include boolean value in initial valuable
console.log(strnum);


//object
//can not change original type 
let team = {
    name: "code hub",
    passed: false,
    age: 20
}
team.name = "coding"
team.passed = true
team.age = 23
console.log(team);

//Explicit Types (do not have initial value)
let person: string;
person = "kyaw kyaw";

let num: number;
num = 22

let passed: boolean;
passed = false

let workers: string[];
workers = ['arker', 'kyaw kyaw', 'leo']

let nums: number[];
nums = [10, 20, 30];

let bools: boolean[];
bools = [false, true];

// Union Types
let mixeded: (boolean | string)[];
mixeded = [false, "kyaw kyaw", "leopico", true];

// Explicit Types (do not have initial value)
// objects 
let personOne: {
    name: string,
    age: number,
    passed: boolean
}

//same shape as defined type structure
personOne = {
    name: "kyaw kyaw",
    age: 22,
    passed: false
}

//Any Types
let human: any;
human = "kyaw kyaw";
human = 10;
human = false

let mixed: any[];
mixed = ["coding", false, 20];

let numb: {
    name: any,
    age: any,
    passed: any
}

numb = {
    name: 33,
    age: 20, 
    passed: false
}

const add = (a: number, b: number, c?: number): void => {
    console.log(a + b);
};
add(20, 30);

const minus = (a: number, b: number): number => {
    console.log(a - b)
    return a - b;
}
minus(4, 2);

//watch live tsc [tsc -w]
const logger = () : void => {
    console.log("I'm logger function")
}
logger();


//Tuple 
let myTuple: [number, string, boolean, string];
myTuple = [2, "kyaw kyaw", false, "Mya Mya"];
console.log(myTuple[3]);

//Interface could be extend and do optional property
interface User {
    name: string
    readonly email: string
    phone_number?: number
    // isLogin: () => boolean
    isLogin(): boolean
    getAge(age: number) : number 
};

interface User {
    isDriving(status: boolean): string
}

interface Editor extends User {
    deleteUser() : string
}

interface Admin extends User, Editor {
    addUser(): string
}

let userOne: User = {
    name: "kyaw kyaw",
    email: "kyawkyaw@gmail.com",
    // phone_number: 1234,
    isLogin: () => true,
    getAge() {
        return 20;
    },
    isDriving() {
        return "user one is driving now."
    }
};
// userOne.email = "nunu@gmail.com"; //can not asign to existing value cause of readonly
console.log(userOne.isDriving(true));

let userTwo: User = {
    name: "Mya Mya",
    email: "myamya@gmail.com",
    phone_number: 2345,
    isLogin: () => false,
    getAge() {
        return 23
    },
    isDriving() {
        return "user two is driving now."
    }
}
console.log(userTwo.isLogin());

let adminOne: Admin = {
    name: "admin one",
    email: "adminone@gmail.com",
    phone_number: 123,
    isLogin: () => true,
    getAge() {
        return 23
    },
    isDriving() {
        return "admin one is driving now."
    },
    deleteUser() {
        return "can delete user"
    },
    addUser() {
        return "can add user"
    }
};



























