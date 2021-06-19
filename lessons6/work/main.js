// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// for (const user of users) {
//     let divWithUsers = document.createElement('div');
//     divWithUsers.innerText = `${user.name} ${user.age}  ${user.status} ${user.address.city} ${user.address.country}
//     ${user.address.street} ${user.address.houseNumber}`;
//     document.body.append(divWithUsers)
// }


for (const user of users) {
    let users = document.createElement('div');
    users.classList.add('user')
    users.innerHTML = `<p>${user.name} - ${user.age} - ${user.status}</p>`;
    document.body.append(users);

    let address = document.createElement('div');
    let userClass = document.getElementsByClassName('user');
    for (const userClassElement of userClass) {
        userClassElement.append(address)
    }
    let cityClass = document.querySelectorAll('.user div');
    let city = document.createElement('div')
    city.innerHTML = `
                        <div>Країна: ${user.address.country}</div>
                        <div>Місто: ${user.address.city}</div>
                        <div>Вулиця: ${user.address.street}</div>
                        <div>Номер будинку: ${user.address.houseNumber}</div>
                      `
    for (const cityClassElement of cityClass) {
        cityClassElement.append(city)
    }

}

// 3 Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules1.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];


let mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'Правила бойцовского клуба';
document.body.append(mainTitle);

let wrap = document.createElement('div');
wrap.setAttribute('id', 'wrap');
document.body.append(wrap);
let rule;
for (let i = 0; i < 8; i++) {
    rule = document.createElement('div');
    rule.classList.add('rules', `rule${i + 1}`);
    wrap.append(rule)
}

let rule1 = document.getElementsByClassName('rule1');
let rule2 = document.getElementsByClassName('rule2');
let rule3 = document.getElementsByClassName('rule3');
let rule4 = document.getElementsByClassName('rule4');
let rule5 = document.getElementsByClassName('rule5');
let rule6 = document.getElementsByClassName('rule6');
let rule7 = document.getElementsByClassName('rule7');
let rule8 = document.getElementsByClassName('rule8');

for (let i = 0; i < rule1.length; i++) {
    rule1[i].innerHTML = `
                            <h2>Первое правило Бойцовского клуба.</h2> 
                            <p>Никому не рассказывать о Бойцовском клубе.</p>`
    rule2[i].innerHTML = `
                            <h2>Второе правило Бойцовского клуба.</h2> 
                            <p>Никому не рассказывать о Бойцовском клубе.</p>`
    rule3[i].innerHTML = `
                            <h2>Третье правило Бойцовского клуба.</h2> 
                            <p>В схватке участвуют только двое.</p>`
    rule4[i].innerHTML = `
                            <h2>Четвертое правило Бойцовского клуба.</h2> 
                            <p>Не более одного поединка за один раз.</p>`
    rule5[i].innerHTML = `
                            <h2>Пятое правило Бойцовского клуба.</h2> 
                            <p>Бойцы сражаются без обуви и голые по пояс.</p>`
    rule6[i].innerHTML = `
                            <h2>Шестое правило Бойцовского клуба.</h2> 
                            <p>Поединок продолжается столько, сколько потребуется.</p>`
    rule7[i].innerHTML = `
                            <h2>Седьмое правило Бойцовского клуба.</h2> 
                            <p>Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок
                            окончен.</p>`
    rule8[i].innerHTML = `
                            <h2>Восьмое и последнее правило Бойцовского клуба.</h2> 
                            <p>Новичок обязан принять бой.</p>`
}


