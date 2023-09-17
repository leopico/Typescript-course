"use strict";
let parson = ["arker", "leopico", "leo"];
parson.push("hla hla");
console.log(parson);
let number = [11, 22, 33, 44, 55];
number.push(66);
console.log(number);
let strnum = ['arker', 'leo', 10, 20];
strnum.push("kyaw kyaw");
strnum.push(30);
console.log(strnum);
let team = {
    name: "code hub",
    passed: false,
    age: 20
};
team.name = "coding";
team.passed = true;
team.age = 23;
console.log(team);
let person;
person = "kyaw kyaw";
let num;
num = 22;
let passed;
passed = false;
let workers;
workers = ['arker', 'kyaw kyaw', 'leo'];
let nums;
nums = [10, 20, 30];
let bools;
bools = [false, true];
let mixeded;
mixeded = [false, "kyaw kyaw", "leopico", true];
let personOne;
personOne = {
    name: "kyaw kyaw",
    age: 22,
    passed: false
};
let human;
human = "kyaw kyaw";
human = 10;
human = false;
let mixed;
mixed = ["coding", false, 20];
let numb;
numb = {
    name: 33,
    age: 20,
    passed: false
};
const add = (a, b, c) => {
    console.log(a + b);
};
add(20, 30);
const minus = (a, b) => {
    console.log(a - b);
    return a - b;
};
minus(4, 2);
const logger = () => {
    console.log("I'm logger function");
};
logger();
let myTuple;
myTuple = [2, "kyaw kyaw", false, "Mya Mya"];
console.log(myTuple[3]);
;
let userOne = {
    name: "kyaw kyaw",
    email: "kyawkyaw@gmail.com",
    isLogin: () => true,
    getAge() {
        return 20;
    },
    isDriving() {
        return "user one is driving now.";
    }
};
console.log(userOne.isDriving(true));
let userTwo = {
    name: "Mya Mya",
    email: "myamya@gmail.com",
    phone_number: 2345,
    isLogin: () => false,
    getAge() {
        return 23;
    },
    isDriving() {
        return "user two is driving now.";
    }
};
console.log(userTwo.isLogin());
let adminOne = {
    name: "admin one",
    email: "adminone@gmail.com",
    phone_number: 123,
    isLogin: () => true,
    getAge() {
        return 23;
    },
    isDriving() {
        return "admin one is driving now.";
    },
    deleteUser() {
        return "can delete user";
    },
    addUser() {
        return "can add user";
    }
};
