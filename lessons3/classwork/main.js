// // - створити функцію яка обчислює та повертає площу прямокутника
let width = prompt('Введіть ширину');
let length = prompt('Введіть довжину');

function mySquareRectangle(length, width) {
    return length * width;
}

const squeare = mySquareRectangle(length, width);
console.log(square);

// // - створити функцію яка обчислює та повертає площу кола
let radius = prompt('Введіть радіус');

function mySquareCircle(radius) {
    return 2 * 3.14 * Math.pow(radius, 2);
}

const circle = mySquareCircle(radius);
console.log(circle);

// - створити функцію яка обчислює та повертає площу циліндру

let height = prompt('Введіть висоту');
let radius = prompt('Введіть радіу');

function mySquareCylinder(height, radius) {
    return 2 * 3.14 * radius * height;
}

const cylinder = mySquareCylinder(height, radius);
console.log(cylinder);


// // створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше(Math використовувати заборонено);
let array = [489498, 5894, 4849, 4478, 2326, 484, 484, 468];

function myFunction(array) {
    let min = array[0];
    let max = min;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
        if (min > array[i]) {
            min = array[i];

        }
        console.log(max)
        return min;
    }
}
const min = myFunction(array);
console.log(min);



// // - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let array = [0, 10, 2, 56];

function permutationsFunction(array, i) {
    let number = 0
    let firstNumber = 0;

    if (i === (array.length - 1)) {
        firstNumber = array[0];
        array[0] = array[i];
        array[i] = firstNumber;
    } else {
        number = array[i];
        array[i] = array[i + 1];
        array[i + 1] = number;
    }
    console.log(array)
}

permutationsFunction(array, 0);

// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let array = [0, 10, 0, 11];

function zeroFunction(array) {
    let arrayZero = [];
    let arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            arrayZero.push(array[i]);
        }
        if (array[i] !== 0) {
            arrayNew.push(array[i]);
        }
    }
    arrayNew = arrayNew.concat(arrayZero);
    for (let j = 0; j < arrayNew.length; j++) {
        console.log(arrayNew[j]);
    }

}

zeroFunction(array);

// -Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger

let n1 = '    Harry       Potter      '

function trimName(n1) {
    let arrayN1 = [];
    let first = n1.trim().split(' ');

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== "") {
            arrayN1.push(first[i]);
        }
    }
    return arrayN1.join(' ');
}

const name = trimName(n1);
console.log(name);