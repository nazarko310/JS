// 1) створити функцію яка приймає масив та виводить його
let date = [5489, 484894, 74894, 74894, 4889];

function myFunction(date) {
    for (let i = 0; i < date.length; i++) {
        console.log(date[i]);

    }
}

myFunction(date);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.


function myArray() {
    let date = [];
    for (let i = 0; i < 5; i++) {
        date[i] = Math.floor(Math.random() * 36) + 5;;
    }
    myFunction();
}

myArray();

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');

function myBalance(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    } else if (firstNumber < secondNumber) {
        console.log(secondNumber);
    }
}

myBalance(firstNumber, secondNumber);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');
let thirdNumber = prompt('Введіть третє число');

function numberMax(firstNumber, secondNumber, thirdNumber) {
    if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
        console.log(firstNumber);
    } else if ((secondNumber > firstNumber) && (secondNumber > thirdNumber)) {
        console.log(secondNumber);
    } else if ((thirdNumber > firstNumber) && (thirdNumber > secondNumber)) {
        console.log(thirdNumber);
    }
}

numberMax(firstNumber, secondNumber, thirdNumber);



// 5) створити функцію яка повертає найбільше число з масиву
const date = [5489, 484894, 74894, 74894, 4889];

function maxArray(date) {
    console.log(Math.max(...date));
}

maxArray(date);

// 6) створити функцію яка повертає найменьше число з масиву

const date = [5489, 484894, 74894, 74894, 4889];

function minArray(date) {
    console.log(Math.min(...date));
}

minArray(date);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const date = [10, 11, 15, 25, 30, 58];


function sumArray(date) {
    let sum = 0;
    for (let i = 0; i < date.length; i++) {
        sum += date[i];
    }
    console.log(sum);
}

sumArray(date);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const date = [10, 11, 15, 25, 30, 58];

function averageArray(date) {
    let sum = 0;
    let average = 0;

    for (let i = 0; i < date.length; i++) {
        sum += date[i];
        average = sum / date.length;
    }

    console.log(average);
}

averageArray(date);


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

let bd = [{
        name: 'Maks',
        age: 28,
        car: true
    },
    {
        model: 'Camry'

    }
];


function keyArray(bd) {
    let arrKeys = [];
    for (const key of bd) {
        arrKeys.push(Object.keys(key));
    }
    console.log(arrKeys)
}

keyArray(bd);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

let bd = [{
        name: 'Maks',
        age: 28,
        car: true
    },
    {
        model: 'Camry'
    }
];


function keyArray(bd) {
    for (const key of bd) {
        console.log(Object.values(key))
    }
}

keyArray(bd);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

let arr = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];

function sumArrs(arr, arr2) {
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.i == arr2.i) {
            sumArr[i] = arr[i] + arr2[i];
        }
    }
    console.log(sumArr);
}


sumArrs(arr, arr2);