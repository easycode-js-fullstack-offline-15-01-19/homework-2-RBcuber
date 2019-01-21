// -------------------------- Home work 2 --------------------------
// -------------------------- Кириченко Игорь --------------------------


// Преобразование примитивов. Задачи.
// Чему равно а, почему?


let a;

a = 0 || 'string'; // a === 'string'   оператор ИЛИ  0 - false   'string' - true  возвращает 1-ое true

a = 1 && 'string'; // a === 'string'   оператор И  1 - true   'string' - true  возвращает последнее true

a = null || 25; // a === 25   оператор ИЛИ  null - false   25 - true  возвращает 1-ое true

a = null && 25; // a === null   оператор И  null - false   25 - true возвращает 1-ый false

a = null || 0 || 35; // a === 35   оператор ИЛИ null - false  0 - false   35 - true  возвращает 1-ое true

a = null && 0 && 35; //  // a === null   оператор И null - false  0 - false   35 - true  возвращает 1-ый false


// Что отобразится в консоли. Почему?


let b;

b = 12 + 14 + '12'; //  '2612', результат сложения суммы первых двух чисел со строкой '12'

b = 3 + 2 - '1'; // 4, Строка '1' конвертируется в число

b = '3' + 2 - 1; //  31,  строка '32' преобразуется в число, после совершается вычитания

b = true + 2; //  3,  true === 1, и складуется

b = +'10' + 1; //  11, унарный оператор + меняет строку '10' на число, после чего идет сложение

b = undefined + 2; //  NaN,  NaN с числом, результат чего NaN

b = null + 5; //  5,  null === 0

b = true + undefined; //  NaN, true === 1  NaN с числом, результат чего NaN


// If else. Задачи.
// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.


let value = 'hidden';

if (value === 'hidden') {
    value = 'visible';
} else {
    value = 'hidden';
}
console.log(value);


//Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).


let value2 = 4;

if (value2 === 0) {
    value2 = 1;
    console.log(value2);
} else if (value2 < 0) {
    value2 = 'less then zero';
    console.log(value2);
} else {
    value2 *= 10;
    console.log(value2);
}


// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//     Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
//     и свойство needRepair в объекте car изменить на true; иначе изменить на false.


let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

if (car.age > 5) {
    needRepair = true;
    console.log('Need Repair');
} else {
    needRepair = false;
}


// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//     Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount
//     и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount
//     и price это строки и вам из них нужно получить числа чтобы выполнить расчет.
//     иначе если поля discount нет то вывести просто поле price в консоль.


let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};

if (item.discount) {
    priceValue = parseFloat(item.price);
    discountValue = parseFloat(item.discount);
    item.priceWithDiscount = priceValue - (priceValue * discountValue / 100) + '$';
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}


//5 . Дан следующий код:

let product = {
    name: 'Яблоко',
    price:'10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене
// то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

priceValue = parseFloat(product.price);
if (priceValue >= min && priceValue <= max) {
    console.log(product.name);
} else {
    console.log('товаров не найдено')
}


// Тернарный оператор. Switch case. Задачи.Тернарный оператор. Switch case. Задачи.

//Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
a = 'none';
switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}


//Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

value3 = 'other';

value3 = value3 === 'hidden'? 'visible' : 'hidden';
console.log(value3);


//Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

value4 = -2;

value4 = value4 === 0 ? 1
    : value4 < 0 ? 'less then zero'
        : value4 * 10;
console.log(value4);




// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//     Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
//     и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car2 = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

car2.needRepair = car2.age > 5 ? (console.log('Need Repair') ,  true  ) : false;
