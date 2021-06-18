// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let myGroupe = document.getElementById('main_header');
myGroupe.style.color = '#ff03de';
myGroupe.innerText = 'This is page for mon-year'

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
let listElement2Text;
for (const value of listElement2) {
    listElement2Text = value.innerText;
    console.log(listElement2Text);
}

// b) робить шириниу елементу ul 400px
let tags = document.getElementsByTagName('ul');
for (const tagElement of tags) {
    tagElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let className = document.getElementsByClassName('linkList');
for (const link of className) {
    link.style.width = '50%';
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let collectionOfli = document.getElementsByTagName('li');
for (const li of collectionOfli) {
    li.style.backgroundColor = '#767373'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let linkColection = document.getElementsByTagName('a');
for (const link of linkColection) {
    link.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let linkColection2 = document.getElementsByTagName('a');
for (const link2 of linkColection2) {
    if (link2.innerText === 'link3') {
        link2.style.fontSize = '40px'
    }

}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let linkColection3 = document.getElementsByTagName('a');
for (const link3 of linkColection3) {
    link3.classList.add(`element_${link3.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let bg = prompt('Введіть значення фону');
let subs = document.getElementsByClassName('sub-header');
for (const subElement of subs) {
    subElement.style.backgroundColor = bg;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color = prompt('Введіть значення кольору');
let subs1 = document.getElementsByClassName('sub-header');
for (const subElement1 of subs1) {
    if (subElement1.innerText === 'content 2 segment') {
        subElement1.style.color = color;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textChange = prompt('Введіть текст для заміни');
let textToChange = document.getElementsByClassName('content_1');
for (const textElement of textToChange) {
    textElement.innerHTML = textChange;
}

// l) отримати елементи p та змінити їм padding на 20px
let pList = document.querySelectorAll('p');
for (const pListElement of pList) {
    pListElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let monYear = document.getElementsByClassName('text2');
for (const monYearElement of monYear) {
    monYearElement.innerText = 'mon-year';
}

// // 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// // При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// // На index2.html виводити записане в localstorage ім'я в div


let form = document.forms.form;
let inputName = form.name;
let inputSurName = form.surname;
form.addEventListener('submit', (e) => {

    let name = inputName.value;
    let surname = inputSurName.value;
    let user = {
        name: name,
        surname: surname
    }
    return localStorage.setItem('user', JSON.stringify(user))
})

// 3. Імітуємо наповнення інтернет магазину товарами:
//     Створити форму з наступними полями:
//     -назва товару -
//     кількість товару -
//     ціна товару -
//     картинка товару(посилання з інтернету)
// Зберігати товари в масив в локалсорадж.При збережені товару з форми, action не повинно відбуватись.
// створити елемент < a href = 'list.html' > На сторінку товарів < /a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


let form1 = document.forms.form1;
let countOfiPhone12 = form1.countOfiPhone12;
let priceOfiPhone12 = form1.priceOfiPhone12;
let imgOfiPhone12 = document.querySelectorAll('#form1 img');
let nameiPhone12 = form1.nameOfiPhone12.value;
let countiPhone12 = countOfiPhone12.value;
let priceiPhone12 = priceOfiPhone12.value;
let pictureiPhone12;
for (const img of imgOfiPhone12) {
    pictureiPhone12 = img.src;
}

let form2 = document.forms.form2;
let countOfiPhone11 = form2.countOfiPhone11;
let priceOfiPhone11 = form2.priceOfiPhone11;
let imgOfiPhone11 = document.querySelectorAll('#form2 img');
let nameiPhone11 = form2.nameOfiPhone11.value;
let countiPhone11 = countOfiPhone11.value;
let priceiPhone11 = priceOfiPhone11.value;
let pictureiPhone11;
for (const img of imgOfiPhone11) {
    pictureiPhone11 = img.src;
}


let iPhone12 = {
    nameOfiPhone12: nameiPhone12,
    countOfiPhone12: countiPhone12,
    priceOfiPhone12: priceiPhone12,
    imgOfiPhone12: pictureiPhone12
}
let iPhone11 = {
    nameOfiPhone11: nameiPhone11,
    countOfiPhone11: countiPhone11,
    priceOfiPhone11: priceiPhone11,
    imgOfiPhone11: pictureiPhone11
}

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    return localStorage.setItem('iPhone12', JSON.stringify(iPhone12));
})
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    return localStorage.setItem('iPhone11', JSON.stringify(iPhone11));
})