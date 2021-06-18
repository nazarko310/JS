// // 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами User
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [
    new User(1, 'Kolia', 'Blokhin', 'kolia_blokhin@gmail.com', '+380682145631'),
    new User(4, 'Kostia', 'Sokolov', 'kostiasokolov@gmail.com', '+38096284845'),
    new User(3, 'Max', 'Bogdanov', 'max_2002@gmail.com', '+38095884481'),
    new User(2, 'Anna', 'Ignatova ', 'anna.ignatova@gmail.com', '+380682549848'),
    new User(5, 'Igor', 'Lapin', 'lapin_igorn@gmail.com', '+38099655441'),
    new User(7, 'Vika', 'Romanova', 'romanova_s@gmail.com', '+380682145631'),
    new User(6, 'Natalia', 'Baranova', 'n.baranova@gmail.com', '+3805028484945'),
    new User(8, 'Kiril', 'Novikov', 'kn-56544@gmail.com', '+380935655144'),
    new User(9, 'Vanya', 'Kharitonov', 'vkharitonov@gmail.com', '+380535848484'),
    new User(10, 'Roma', 'Uvarov', 'uvarov@gmail.com', '+380652145651'),
]
console.log(usersArray);

// // 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)творити пустий масив, наповнити його 10 об'єктами Client
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientsArray = [
    new Client(1, 'Kolia', 'Blokhin', 'kolia_blokhin@gmail.com', '+380682145631', ['laptop', 'cellphone', 'mouse', 'watch']),
    new Client(2, 'Anna', 'Ignatova', 'anna.ignatova@gmail.com', '+380682549848', ['headphones', 'cellphone', 'watch', 'camera']),
    new Client(3, 'Max', 'Bogdanov', 'max_2002@gmail.com', '+38095884481', ['TV', 'PC', 'camera']),
    new Client(4, 'Kostia', 'Sokolov', 'kostiasokolov@gmail.com', '+38096284845', ['laptop', 'cellphone', 'mouse']),
    new Client(5, 'Kostia', 'Sokolov', 'kostiasokolov@gmail.com', '+38096284845', ['laptop']),
    new Client(6, 'Natalia', 'Baranova', 'n.baranova@gmail.com', '+3805028484945', ['headphones', 'cellphone', 'watch']),
    new Client(7, 'Vika', 'Romanova', 'romanova_s@gmail.com', '+380682145631', ['headphones', 'cellphone', 'watch']),
    new Client(8, 'Kiril', 'Novikov', 'kn-56544@gmail.com', '+380935655144', ['laptop', 'mouse']),
    new Client(9, 'Vanya', 'Kharitonov', 'vkharitonov@gmail.com', '+380535848484', ['TV', 'camera']),
    new Client(10, 'Roma', 'Uvarov', 'uvarov@gmail.com', '+380682145631', ['TV', 'camera']),
]

console.log(clientsArray);


// // 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.driver = [];
    this.engineCapacity = engineCapacity;
    this.speed = function () {
        console.log('Максимальна швидкість:' + this.maxSpeed);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed) {
            this.maxSpeed = newSpeed;
        }
    }
    this.changeYear = function (newValue) {
        if (newValue) {
            this.year = newValue;
        }
    }
    this.addDriver = function (driverArray) {
        this.driver.push(driverArray);
    }
}

Car.prototype.info = function () {
    console.log(`Модель машини: ${this.model}, вийшла вона в ${this.year} р., від виробника - ${this.producer}. Максимальна швидкість: ${this.maxSpeed} при об'ємі двигуна: ${this.engineCapacity}`)
}


let driverArray = {
    name: 'Vasia',
    surname: 'Patin',
    point: 'male',
    experience: 3
}
let carsArray = [
    new Car('A6', 'Audi', 1994, 245, 1998),
    new Car('A7', 'Audi', 2000, 260, 2500)
]
for (const car of carsArray) {
    if (car.model === 'A6') {
        car.increaseMaxSpeed(248);
        car.changeYear(1995);
    }
    if (car.model === 'A7') {
        car.addDriver(driverArray);
        console.log(car);
    }
}


// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданн

const filterId = usersArray.filter(user => user.id % 2 === 0)
console.log(filterId);

const sortIdFirst = usersArray.sort((user1, user2) => user1.id - user2.id);
console.log(sortIdFirst);

const sortIdSecond = usersArray.sort((user1, user2) => user2.id - user1.id);
console.log(sortIdSecond);

// // 6. Взяти масив з завдання 2.
// // Відсортувати його по кількості товарів в полі order. по спаданню

let sortOrder = clientsArray.sort((client1, client2) => client1.order.length - client2.order.length)
console.log(sortOrder);
