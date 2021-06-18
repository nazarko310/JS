//Дан масив['a', 'b', 'c'].Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу. -
let letters = ['a', 'b', 'c'];
for (let i = 0; i < letters.length; i++) {
    letters.push(i + 1);
    console.log(letters[i]);
    if (letters[i] === 3) {
        break;
    }
}


//Дан масив[1, 2, 3].Зробіть з нього новий масив[3, 2, 1]. -
let numbers = [1, 2, 3];
let numberReverse = [];
let firstNumber = numbers[0];
numbers[0] = numbers[numbers.length - 1];
numbers[numbers.length - 1] = firstNumber;
numberReverse.push(numbers);
for (let i = 0; i < numberReverse.length; i++) {
    console.log(numberReverse[i]);
}


//Дан масив[1, 2, 3].Додайте йому в кінець елементи 4, 5, 6. -
let arr = [1, 2, 3];
arr.push(4, 5, 6);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//Дан масив[1, 2, 3].Додайте йому в початок елементи 4, 5, 6.
let array = [1, 2, 3];
array.unshift(4, 5, 6);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let nums = [1, 2, 3, 4, 5];
let numsCopy = [];
for (let i = 3; i < nums.length; i++) {
    numsCopy.push(nums[i]);
    console.log(numsCopy);
}

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let numbersArray = [1, 2, 3, 4, 5];
let numbersArrayCopy = [];
for (let i = 0; i < 2; i++) {
    numbersArrayCopy.push(numbersArray[i]);
    console.log(numbersArrayCopy);
}


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let pushArray = [1, 2, 3, 4, 5];
let pushArrayCopy = [];
pushArray.splice(3, 2, 'a', 'b', 'c');
for (let i = 0; i < pushArray.length; i++) {
    pushArrayCopy.push(pushArray[i])
}
console.log(pushArrayCopy);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let myArray = [1515, 48, 8484, 5855, 545, 124, 4548, 541, 56, 596];
for (let i = 0; i < myArray.length; i++) {
    if (i % 2) {
        console.log(myArray[i]);
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let masuv = [1515, 48, 8484, 5855, 545, 124, 4548, 541, 56, 596];
let masuvEmpty = [];
for (let i = 0; i < masuv.length; i++) {
    masuvEmpty = masuv[i];
    console.log(masuvEmpty);
}



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let newArray = ['a', 'b', 'c'];
let str = "";
for (let i = 0; i < newArray.length; i++) {
    str += newArray[i];
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
while (i < newArray.length) {
    str += newArray[i];
    i++;
}
console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const key of newArray) {
    str += key;

}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const key in newArray) {
    str += newArray[key];
}
console.log(str);



// ----------------------additionally


let date = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 2. перебрати його циклом for
for (let i = 0; i < date.length; i++) {
    console.log(date[i]);
}

// 1. перебрати його циклом while
let i = 0;
while (i < date.length) {
    console.log(date[i]);
    i++;
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i < date.length) {
    if ((i % 2) != 0) {
        console.log(date[i]);
    }
    i++;
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i = 0;
while (i < date.length) {
    if ((date[i] % 2) == 0) {
        console.log(date[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < date.length; i++) {
    if ((i % 2) != 0) {
        console.log(date[i]);
    }
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < date.length; i++) {
    if ((date[i] % 2) == 0) {
        console.log(date[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < date.length; i++) {
    if ((i % 3) == 0) {
        date[i] = 'octen';
    }
    console.log(date[i]);
}

// 8. вивести масив в зворотньому порядку.
for (let i = 0; i < date.length; i++) {
    let dateReverse = date[date.length - i - 1];
    console.log(dateReverse);

}

//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

let emptyArray = [];
for (let i = 0; i < 101; i++) {
    emptyArray[i] = i;
    if ((emptyArray[i] % 2) == 0) {
        console.log(emptyArray[i]);
    }

}
// - заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 101; i++) {
    emptyArray[i] = i;
    if ((emptyArray[i] % 2) != 0) {
        console.log(emptyArray[i]);
    }

}


// c.Заповнити масив 20 ма рандомними числами.(Google: Generate random number JS)
let arrRandom = [];

for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 36) + 5;;
    console.log(arrRandom[i]);
}

// d.Заповнити масив 20 ма рандомними чисалами в діапазоні від 8 до 732(Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 732) + 8;;
    console.log(arrRandom[i]);
}

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 732) + 8;
    if ((i % 3) == 0)
    // console.log(i);
        console.log(arrRandom[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 732) + 8;
    if (((i % 3) == 0) && ((arrRandom[i] % 2) == 0)) {
        console.log(arrRandom[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrRandomCopy = [];
for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 36) + 1;
    if (((i % 3) == 0) && ((arrRandom[i] % 2) == 0)) {
        arrRandomCopy.push(arrRandom[i]);
    }
    console.log(arrRandomCopy);

}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr.length; i++) {
    if (((arr[i]) % 2) == 0) {
        console.log(arr[i - 1]);
    }
}

// 6. Є масив з числами[100, 250, 50, 168, 120, 345, 188], Які характеризують вартість окремої покупки.Обрахувати середній чек.
const check = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < check.length; i++) {
    sum = sum + check[i];
}
console.log(sum);
let avarege = sum / check.length;
console.log(avarege);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrRandom = [];
let arrRandomCopy = [];
for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 15) + 0;
    arrRandomCopy.push(arrRandom[i] * 5);
}
console.log(arrRandomCopy);

// 8. Створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let haosCopy = [];
let haos = ['Andriy', 4889, true, '484984', 'Katia', 2118518, 486];
for (let i = 0; i < haos.length; i++) {
    if ((typeof(haos[i])) == "number") {
        haosCopy.push(haos[i]);
    }
}
console.log(haosCopy);