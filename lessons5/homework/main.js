// a) отримує текст з параграфа з id "content"

let textContent = document.getElementById('content')
console.log(textContent)

// b) отримує текст з блоку з id "rules"

let textRules = document.getElementById('rules');
console.log(textRules);


// c) замініть текст параграфа з id 'content' на будь-який інший
let textChangeContent = document.getElementById('content');
textContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur distinctio dolor excepturi, exercitationem in itaque mollitia, nam nemo nisi obcaecati officia omnis porro, quae recusandae reprehenderit rerum sequi vero.'

// d) замініть текст параграфа з id 'rules' на будь-який інший

let textChangeRules = document.getElementById('rules');
textChangeRules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis fugiat necessitatibus praesentium sed. Aperiam dicta illo perspiciatis velit? Architecto autem debitis dignissimos dolores illum laborum molestias reprehenderit temporibus vero.'

// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій

let allTagName = document.querySelectorAll("div, p, ul");
for (const tag of allTagName) {
    tag.style.backgroundColor = 'red'
    tag.style.color = 'blue';
}


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

let classListener = document.getElementById('rules');
for (const classListenerElement of classListener.classList) {
    console.log(classListenerElement);
}

// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
let getElementClass = document.getElementsByClassName('fc_rules');
console.log(getElementClass);

for (const elementClass of getElementClass) {
    elementClass.style.color = '#ff0000';
}