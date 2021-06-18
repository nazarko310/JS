// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


class Cinderella {
    constructor(name, age, sizeOfShoes) {
        this.name = name;
        this.age = age;
        this.sizeOfShoes = sizeOfShoes;
    }
}


let cinderellasArray = [
    new Cinderella('Bella', 16, 31),
    new Cinderella('Alize', 14, 24),
    new Cinderella('Kate', 18, 34),
    new Cinderella('Ilsa', 15, 28),
    new Cinderella('Alisabet', 16, 29),
    new Cinderella('Fika', 17, 25),
    new Cinderella('Karina', 17, 28),
    new Cinderella('Angelina', 14, 26),
    new Cinderella('Masha', 18, 25),
    new Cinderella('Nusha', 21, 32)
]

class Prince {
    constructor(name, age, shoesFind) {
        this.name = name;
        this.age = age;
        this.shoesFind = shoesFind;
    }
}

let nik = new Prince('Nik', 20, 34);

for (const cinderella of cinderellasArray) {
    if(cinderella.sizeOfShoes===nik.shoesFind){
        console.log(`Попелюшка, яка так сподобалась принцу і яка власне і загубила туфельку звуть ${cinderella.name}`);
    }
}


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


function Cinderella(name, age, sizeOfShoes) {
    this.name = name;
    this.age = age;
    this.sizeOfShoes = sizeOfShoes;

}

let cinderellasArray = [
    new Cinderella('Bella', 16, 31),
    new Cinderella('Alize', 14, 24),
    new Cinderella('Kate', 18, 34),
    new Cinderella('Ilsa', 15, 28),
    new Cinderella('Alisabet', 16, 29),
    new Cinderella('Fika', 17, 25),
    new Cinderella('Karina', 17, 28),
    new Cinderella('Angelina', 14, 26),
    new Cinderella('Masha', 18, 25),
    new Cinderella('Nusha', 21, 32)
]


function Price(name, age, findShoes) {
    this.name = name;
    this.age = age;
    this.findShoes = findShoes;
    this.findShoesFunction = function (cinderellasArray) {
        for (const cinderellasArrayElement of cinderellasArray) {
            if (cinderellasArrayElement.sizeOfShoes === nik.findShoes) {
                console.log(cinderellasArrayElement);
            }
        }
    }
}

let nik = new Price('Nik', 20, 29);

nik.findShoesFunction(cinderellasArray);


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select


function Tags(name, work, attribut) {

    this.name = name;
    this.work = work;
    this.attribut = attribut;

}

let tagsArray = [
    new Tags('a', 'Створює посилання або якорь', [
        {href: 'Задає адресу документа, на який слід перейти'},
        {rel: 'Відносини між посилаються і поточним документами'},
        {type: 'Вказує MIME-тип документа, на який веде посилання.'}
    ]),
    new Tags('div', 'Блоковий елемент і призначений для виділення фрагмента документа з метою зміни виду вмісту', [
        {align: 'Задає вирівнювання вмісту тега div'},
        {title: 'Додає підказку до вмісту'}
    ]),
    new Tags('h1', 'Найбільш важливий заголовок першого рівня', [
        {align: 'Визначає вирівнювання заголовка'}
    ]),
    new Tags('span', 'Призначений для визначення малих елементів документа', ['Для цього тега доступні універсальні атрибути і події']),
    new Tags('input', 'Дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем', [
        {type: 'Повідомляє браузеру, до якого типу належить елемент форми'},
        {name: 'Ім`я поля, призначене для того, щоб обробник форми міг його ідентифікувати'},
        {value: 'Значення елемента'}
    ]),
    new Tags('form', 'Встановлює форму на веб-сторінці', [
        {method: 'Метод протоколу HTTP'},
        {action: 'Адреса програми або документа, який обробляє дані форми'}
    ]),
    new Tags('option', 'Визначає окремі пункти списку, що створюється за допомогою контейнера', [
        {label: 'Вказівка мітки пункту списку'},
        {selected: 'Заздалегідь встановлює певний пункт списку виділеним'}
    ]),
    new Tags('select', 'Дозволяє створити елемент інтерфейсу у вигляді списку', [
        {size: 'Кількість відображуваних рядків списку'},
        {name: 'Ім`я елемента для відправки на сервер або звернення через скрипти'}
    ])
]

for (const tag of tagsArray) {
    console.log(tag);
}