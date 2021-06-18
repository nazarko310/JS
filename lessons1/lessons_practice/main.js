console.log("task1");
console.log("\n");
// task1
let str = "Привіт";
console.log(typeof str);
let num = 123;
console.log(typeof num);
let flag = true;
console.log(typeof flag);
let txt = "true";
console.log(typeof txt);
// task1
console.log("\n");
console.log("task2");
console.log("\n");
// task2
let a1 = (5 + 12) * 2;
let a2 = (6 * 4) / 2;
let a3 = (45 - 23) * 3;
let a4 = 12 + 56 + 22;
let a5 = (100 + 74) / 2;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
// task2
console.log("\n");
console.log("task3");
console.log("\n");
//task3
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + "3";
let a9 = "5" - 3;
let a10 = 75 + "кг";
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
//task3
console.log("\n");
console.log("task4");
console.log("\n");
//task4
let height = 23;
let width = 10;
let s = height * width;
console.log(s + "см^2");
//task4
console.log("\n");
console.log("task5");
console.log("\n");
//task5
let heightC = 10;
let dC = 4;
let v = +(3.14 * Math.pow((4 / 2), 2) * 10);
console.log(v);
//task5
console.log("\n");
console.log("task6");
console.log("\n");

// task6
let n = 3;
let m = 4;
let k = Math.sqrt((Math.pow(n, 2)) * (Math.pow(m, 2)));
console.log(k);
// task6
console.log("\n");
console.log("task7");
console.log("\n");
// task7
alert('Покровець Назарій Ігорович \n21 \nБіг');
// task7
console.log("\n");
console.log("task8");
console.log("\n");
// task8
let str1 = 'Хто';
let str2 = 'ти';
let str3 = 'такий';
let concatenation = str1 + " " + str2 + " " + str3;
document.write(concatenation + "<br/>");
// task8
console.log("\n");
console.log("task9");
console.log("\n");
// task9
let string = "20";
let a = 5;
document.write(string + a + "<br/>"); //205
document.write(string - a + "<br/>"); //15
document.write(string * "2" + "<br/>"); //40    
document.write(string / 2 + "<br/>"); //10
// task9
console.log("\n");
console.log("task10");
console.log("\n");
// task10
let number = +prompt("Введіть перше число");
let number1 = +prompt("Введіть перше число");
let result = alert(number + number1);
// task10
console.log("\n");
console.log("task11");
console.log("\n");
// task11
let firstName = prompt("Введіть ваше ім'я");
let secondName = prompt("Введіть ваше прізвище");
let age = prompt("Введіть ваш вік");
alert('Доброго вечора' + " " + firstName + " " + secondName + "," + " " + "мої привітання, що вам" + " " + age + ".")
// task11



// aditional
// task1
let numberOne = prompt("Введіть перше число");
let numberTwo = prompt("Введіть друге число");
let numberThree = prompt("Введіть третє число");
if (numberOne > numberTwo && numberTwo > numberThree) {
    console.log(numberThree + "\n" + numberTwo + "\n" + numberOne)
} else if (numberOne > numberTwo && numberTwo < numberThree && numberOne > numberThree) {
    console.log(numberTwo + "\n" + numberThree + "\n" + numberOne)
} else if (numberTwo > numberOne && numberOne > numberThree) {
    console.log(numberThree + "\n" + numberOne + "\n" + numberTwo)
} else if (numberTwo > numberOne && numberOne < numberThree && numberTwo > numberThree) {
    console.log(numberOne + "\n" + numberThree + "\n" + numberTwo)
} else if (numberThree > numberOne && numberOne > numberTwo) {
    console.log(numberTwo + "\n" + numberOne + "\n" + numberThree)
} else if (numberThree > numberOne && numberOne < numberTwo && numberThree > numberTwo) {
    console.log(numberOne + "\n" + numberTwo + "\n" + numberThree)
}else{
console.log("Soryy")
}
// task1

// task2
let light = prompt("Введіть колір світлофора")
if ((light === "зелений") || (light === "ЗЕЛЕНИЙ") || (light === "green") || (light === "GREEN")) {
    alert("Gooo");
} else if ((light === "червоний") || (light === "ЧЕРВОНИЙ") || (light === "red") || (light === "RED")) {
    alert("Stop");
} else if ((light === "жовтий") || (light === "ЖОВТИЙ") || (light === "yellow") || (light === "YELLOW")) {
    alert("Wait");
} else {
    alert("Введи конкретне значення");
}
// task2


// task3

let lighting = prompt("Введіть колір світлофора");
let isRoadClear = confirm("На дорозі є машини?");
if (((lighting === "зелений") || (lighting === "ЗЕЛЕНИЙ") || (lighting === "green") || (lighting === "GREEN")) && (isRoadClear === false)) {
    alert("Gooo");
} else if (((lighting === "зелений") || (lighting === "ЗЕЛЕНИЙ") || (lighting === "green") || (lighting === "GREEN")) && (isRoadClear === true)) {
    alert("Wait until the violators pass");
} else if (((lighting === "жовтий") || (lighting === "ЖОВТИЙ") || (lighting === "yellow") || (lighting === "YELLOW")) && (isRoadClear === true)) {
    alert("Wait");
} else if (((lighting === "жовтий") || (lighting === "ЖОВТИЙ") || (lighting === "yellow") || (lighting === "YELLOW")) && (isRoadClear === false)) {
    alert("Wait too");
} else if (((lighting === "червоний") || (lighting === "ЧЕРВОНИЙ") || (lighting === "red") || (lighting === "RED")) && (isRoadClear === true)) {
    alert("Stop too");
} else if (((lighting === "червоний") || (lighting === "ЧЕРВОНИЙ") || (lighting === "red") || (lighting === "RED")) && (isRoadClear === false)) {
    alert("Stop and wait");
} else {
    alert("Do what you want");
}
// task3