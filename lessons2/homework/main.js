// ------------------1----------------------
// --створити масив з:
//     -з 5 числових значень -
//     з 5 стічкових значень -
//     з 5 значень стрічкового, числового та булевого типу -
//     та вивести його в консоль

const nambers = [58, 474, 484, 785, 321];
for (let i = 0; i < nambers.length; i++) {
    console.log(nambers[i]);
}
console.log('----------------------');
const users = ['Lila', 'Dima', 'Katia', 'Anna', 'Masha'];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
console.log('----------------------');
const array = [8498, true, 'Katia', false, 78484, 'Masha', 'Dima', 4864, 58959];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];

arr[0] = 'Apple';
arr[1] = 'Samsung';
arr[2] = 'Xiomi';
arr[3] = 'Nokia';
arr[4] = 'Nomi';
console.log(arr);



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 11; i++) {
    document.write('<div style = "color: grey; font-size: 24px; margin-bottom:10px;">Привіт user!</div>');
}
for (let i = 0; i < 11; i++) {
    document.write(`<div style = "color: grey; font-size: 24px ">Привіт user, № ${i}</div>`);
}


let i = 0;
let j = 0;
while (i < 20) {
    document.write(`<h1 style = "color:red;">Hello</h1>`);
    i++;
}
while (j < 20) {
    document.write(`<h1 style = "color: blue;">Hello user № ${j}</h1>`);
    j++;
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


let departament = [];
departament[0] = 'Audit';
departament[1] = 'Finacial';
departament[2] = false;
departament[3] = true;
departament[4] = 98458;
departament[5] = 784484;
for (let i = 0; i < departament.length; i++) {
    console.log(departament[i]);
}

for (let i = 0; i < 11; i++) {
    console.log(i);
    document.write(`${i}<br>`);
}
console.log('--------------------------------');
document.write("<br>");
for (let i = 0; i < 101; i++) {
    console.log(i);
    document.write(`${i}<br>`);
}

for (let i = 0; i < 101; i += 2) {
    console.log(i);
    document.write(`${i}<br>`);
}
for (let i = 0; i < 101; i++) {
    if ((i % 2) == 0) {
        console.log(i);
        document.write(`${i}<br>`);
    }
}
for (let i = 0; i < 101; i++) {
    if ((i % 2) != 0) {
        console.log(i);
        document.write(`${i}<br>`);
    }
}


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithId = [{
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    }
];

let citiesWithId = [{
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    }
];
let infoUser = [];
for (let i = 0; i < usersWithId.length; i++) {
    infoUser.push(usersWithId[i]);
}
for (let k = 0; k < infoUser.length; k++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (infoUser.id === citiesWithId.user_id) {
            infoUser[k].city = citiesWithId[j];
        }
    }
}
console.log(infoUser);