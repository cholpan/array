// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// const obj = {a: 1, b: 2, c: 3, d: 4}
// const result = Object.keys(obj)
// console.log(result.length);
// console.log(Object.keys(obj).length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// const obj = {a: 1, b: 2, c: 3}
// console.log(obj.c);
// console.log(obj["c"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// Создаем объект с зарплатами
// const obj = {Ширин: '1000', Айжан: '500', Атай: '200'};
// console.log('Зарплата Атая: ' + obj['Атай']);
// console.log('Зарплата Ширин: ' + obj['Ширин']);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.    // const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Атай = "500"
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
// const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Медет = '1500'
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// Создаем объект с заработными платами
//    const obj = {
//     Ширин: '1000',
//     Айжан: '500',
//     Атай: { salary: '500' }
//   };
//   console.log(obj.Атай.salary);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// const obj = {
//   1: "Понедельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
//   6: "Суббота",
//   7: "Воскресенья",
// };
// console.log(obj[3]);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// Создаем объект с днями недели и их номерами
// Создаем объект с днями недели и их номерами
// const obj = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
//   };

//   const day = 3;
//   if (obj.hasOwnProperty(day)) {
//     console.log(`День недели для номера ${day}: ${obj[day]}`);
//   } else {
//     console.log(`Не точный номер дня недели: ${day}`);
//   }

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// const obj = {
//      Ширин: '1000', Айжан:'500', Атай: {salary: '500'}
// }
// console.log(Object.keys(obj));

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.values(obj));

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.entries(obj));

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// function name(str){
//  if(str.name.length % 2 === 0){
//     return 1
//  }else{
//     return 0
//  }
// }
// console.log(name({name:'Igor'}));

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// function arr(str){
//     return str.map(el => {
//         return el.id
//     })
// }
// console.log(arr([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]));

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.
// const arr5 = {
//     name: 'Igor'
// }
// arr5.age = '25'
// console.log(arr5)
// arr5.name = "Azat"
// console.log(arr5)

// 15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.
// const obj  = {
//     name: "headphones",
//     price: 100,
//     discount: 0
//   };
//   if (obj.price > 100) {
//     obj.price = obj.price -(obj.price/100) *10;
//     obj.price = obj.discount -(obj.discount / 100) * 7;
//   }
//   console.log(obj);

// 1) Удвоение элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.
// function tree(arr) {
//     let free = arr.map((el) => {
//       return el * 2;
//     });

//     console.log(free);
//   }
//  tree([1,2,3,4,5])

// 2) Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.
// function goo (numbers) {
//     return numbers.map((el) => {
//         return el.toUpperCase()
//     })
// }
// console.log(goo(["Cholpan","Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"]));

// 3)  Вычисление суммы элементов массива. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.
// function goo (number) {
//     return number.reduce((acc , el) => {
//         return acc + el
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 4) Фильтрация элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function goo (number) {
//     return number.filter((el) => {
//         return el % 2 === 0
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 5) Преобразование строк в числа
// Напишите функцию, которая принимает массив строк, содержащих числа, и возвращает новый массив, в котором каждая строка преобразована в число.

// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function goo (number) {
//     return number.filter((el) => {
//         return el % 2 === 0
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 7) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];
// function goo (number) {
//     return number.Math.abc((el) => {
//         return el
//     })
// }
// console.log(goo([-2, -1, 0, 1, 2, 3, 4, 5]));

// 8) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки определенной длины. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const lip = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// console.log(lip.length);

// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50];
// function arr (numbers) {
//     return numbers.reduce((acc, el) => {
//                 if (acc > el) {
//                     return acc
//                 }
//                 return el
//     })
// }

// console.log(arr([10, 20, 30, 40, 50]));
//     return numbers.reduce((acc, el) => {
//                 if (acc > el) {
//                     return acc
//                 }
//                 return el
//     })
// }

// console.log(arr([10, 20, 30, 40, 50]));

// 12) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, состоящие только из заглавных букв. const words = ['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY'];
// function goo (numbers) {
//     return numbers.filter((el, index) => {
//         return el [0].toUpperCase()
//     })
// }
// console.log(goo(['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY']));

// 13) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые являются четными и больше 5. const numbers = [2, 4, 6, 7, 8, 10, 11];
// function goo (number) {
//     return number.filter((el) => {
//         return el > 5
//     })
//     return el %2 === 0
// }
// console.log(goo([2, 4, 6, 7, 8, 10, 11]));

// 14) Напишите функцию, которая принимает массив значений различных типов данных и возвращает новый массив, содержащий только значения определенного типа.
//  const values = [1, 'apple', true, null, 'banana', 5, false];

//  function goo (arr, typeToFilter) {
//     const oop = arr.filter(function (value) {
//       return typeof value === typeToFilter;
//     });
//     return oop;
//   }
//   const values = [1, 'apple', true, null, 'banana', 5, false];
//   const  hoo = goo (values, 'string');
//   console.log(hoo);

// 15) Напишите функцию, которая принимает массив чисел и возвращает максимальное число из них. const numbers = [10, 5, 8, 3, 9];
// function goo(numbers) {
//     return numbers.reduce((acc, el) => {
//         if (acc, el) {
//             return acc;
//         }
//         return el
//     })
// }
// console.log(goo([10, 5, 8, 3, 9]));

// 16) Напишите функцию, которая принимает массив строк и возвращает их объединение в одну строку. const words = ['Hello', ' ', 'world', '!'];
// function goo (numbers) {
//     return numbers.join((el) => {
//         return el.split()
//     })
// }
// console.log(goo([['Hello', ' ', 'world', '!']]));

// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];
// function goo (number) {
//     return number.filter((el, index) => {
//         return el %2 === 0
//     })
// }
// console.log(goo([1, 3, 5, 2, 4, 6, 7]));

// 17) Напишите функцию, которая принимает массив чисел и возвращает среднее значение.  const numbers = [2, 4, 6, 8, 10];
// function foo (numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
//     const mas = numbers.reduce((acc, current) => acc + current, 0);
//     const poo = mas / numbers.length;
//     return poo;
//   }
//   const numbers = [2, 4, 6, 8, 10];
//   const poo = foo (numbers);
//   console.log(`${poo}`);

// 18) Напишите функцию, которая принимает массив элементов и возвращает количество вхождений определенного элемента. const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple'];
// function oof(arr, el) {
//     const los = arr.reduce((acc, current ,el) => {
//       if (arr === el) {
//         return acc + 1;
//       } else {
//         return acc;
//       }
//     }, 0);
//     return los;
//   }
//   const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple'];
//   const el = 'apple';
//   const ool = oof (fruits, el);
//   console.log(`${el}`,`${ool}`);

// 19) Напишите функцию, которая принимает массивы и возвращает их конкатенацию в один массив.
// function tryy(...arrays) {
//     return [].concat(...arrays);
//   }
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const cryy = tryy (array1, array2);

//   console.log(cryy);

// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива.
// const numbers = [1, 3, 5, 2, 4, 6, 7];

// function task (arr){
//    return arr.find((el)=> {
//     if (el % 2 === 0) {
//         return el
//     }
//    })

// }
// console.log(task([1, 3, 5, 2, 4, 6, 7]));

// 21) Напишите фуnкцию, которая принимает массив строк и возвращает первую строку определенной длины.
//const words = ['apple', 'banana', 'cherry', 'date'];

// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива.
// const numbers = [-2, -1, 0, 3, 5, 7];
// 23) Напишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы.
// const words = ['apple', 'banana', 'cherry', 'date'];

// 1. Вам дана переменная a. Если переменная a равна 10, то
// выведите 'Верно', иначе выведите 'Неверно'.
// let a = 10
// if(a ==10){
//     console.log(("верно"));
// }else{
//     console.log(("неверно"));
// }
// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b',
// 'a меньше b'.
// let a = 100
// let b= 100
// if( a > b ){
// console.log(a);
// }else if(a<b){
// console.log(b);
// }else{
// console.log("равно");
// }

// 3. Вам дана переменная a=-2. Составьте условие,
// по которому в консоль будет выводиться 'positive' - если
// число больше 0, 'равно' если число равно 0, "negative" если
// число меньше 0.
// let a = 0
// if(a > 0){
//     console.log("positive");
// }else if ((a === 0)){
//     console.log("равно");
// }else {
//     console.log("negative ");
// }
// 4. Вам дана переменная number=45. Составьте условие, по
// которому будет выводиться в консоль "Четное число",
// "Нечетное число".
// let number = 6
// if ( number % 2 === 0){
//     console.log("четное число");
// }else{
//     console.log("нечетное число");
// }
// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться
// консоль "Четное число", "Нечетное число".
// let a = 10
// let b = 2
// if ( (a / b) % 2 === 0){
//     console.log("четное число");
// }else{
// console.log("нечетное число");
// }
// 6. Вам дана переменная s. Составьте условие, по которому
// в консоль будет выводится тип этой переменной - "boolean",
// "number", "string".
//  let s = []
//  if ( typeof s === "string" || typeof s === " boolean" || typeof s === "number"){
//     console.log(s);
//  }
// console.log(typeof s );
// Вам дана переменная let age = укажите возраст
//  • Если возраст от 1 до 13: посоветуйте ваш любимый мультфильм.
//  • Если возраст от 14 до 17: посоветуйте приключенческий фильм.
//  • Если возраст от 18 и выше: посоветуйте серьезный фильм.
//  • Если пользователь ввел неверный возраст, сообщите ему об ошибке.
// Пример ввода:
//  • Сколько вам лет?
//  • 18
//  • Посмотрите фильм "Пролетая над гнездом кукушки"
// Указания:
//  • Вы можете придумать больше градаций возрастов и фильмов
//  • Задание необходимо выполнить с помощью if ... else if ... else
// let age =  18
// if (age >= 1 && age <= 13) {
//     console.log("Ну погоди")
// }else if ( age >= 14 && age <= 17){
//     console.log("приключенческий фильм");
// }else if ( age >= 18 && age <= 40 ){
//     console.log("серьезный фильм");
// }else {
//     console.log("error");
// }

// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// const wer =  ['a', 'b', 'c']
// wer.push(1, 2, 3)
// console.log(wer);
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const arr =  [1, 2, 3]
// const ret = [4, 5, 6]
// console.log(arr.concat(ret));
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// const arr = [1, 2, 3]
// arr.push(4, 5, 6)
// console.log(arr);
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// const arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr);
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// const arr = ['js', 'css', 'jq']
// console.log(arr[0]);
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// const arr = ['js', 'css', 'jq']
// console.log(arr[arr.length -1 ]);
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// новый элементы [1, 2, 3].
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0,3));
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(3));
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в [1, 4, 5].
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr);
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].
// const arr =[1, 2, 3, 4, 5]
// arr.splice(0,1)
// arr.splice(-1)
// console.log(arr);
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b', 'c',)
// console.log(arr);

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1,1,"a","b")
// arr.splice(6,0, "c", "d")
// arr.splice(8,0, "e")
// console.log(arr);

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
// const arr = ['а', 'б', 'в']
// arr.push(4,3,5,5)
// console.log(arr);
// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"].
//Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".
// const arr  = ["Apple", "Orange", "Pinapple", "Cherry"]
// arr.shift()
// arr.splice(2,0,"apple")
// console.log(arr);

// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"].
// вырезать самый длинный элемент
// const arr = ["kurmanjandatka","Apple", "Orange", "Pinapple", "Cherry"]
// const arr1 = arr.reduce((acc,el)=>{
//     if ( acc.length > el.length){
//         return acc

//     }return el;
// })
// console.log(arr1);

// Задание №6
// const letters = ['a', 'b', 'c', 'd', 'e'];
// Удалить 3 элемента, начиная с индекса 2, и сохранить их в переменной 'removed'
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const removed = arr.splice(2, 3);
// console.log(arr);
// console.log(removed);

// Задание №7
// const colors = ['red', 'green', 'blue'];
// Вставить 'yellow' и 'purple' перед индексом 1

// const arr = ['red', 'green', 'blue'];
// arr.splice(1, 0, 'yellow', 'purple');
// console.log(arr);

// Задание №8
// const fruits = ['apple', 'banana', 'orange'];
// Заменить 1 элемент, начиная с индекса 1, на 'grape' и 'kiwi'
// const fruits = ['apple', 'banana', 'orange']
// fruits.splice(1,1,"kiwi", "grape")
// console.log(fruits);

// Задание №9
// const numbers = [1, 2, 3, 4, 5];
// Удалить 2 элемента, начиная с индекса 2

// let str = "dlroW olleH";
// вывести Hello World

// задачи
//  №1
// const arr = ["a", "b", "c"];
// arr.push(1,2,3);
// console.log(arr);

// .concat()-объединяет массивы

// №2
// const arr2  = [1,2,3]
// const arr3 = [4,5,6]
// console.log(arr2.concat(arr3));
// console.log(...arr2,...arr3);

// №3
// const arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);

// №4
// const arr = ["js","css","jq"];
// console.log(arr[0]);

// №5
// const arrs= ["js","css","jq"];
// console.log(arrs[2]);

// №6
// const numbers =[1,2,3,4,5];
// console.log(numbers.slice(0,3));

// №7
// const arrs3 = [1,2,3,4,5];
// console.log(arrs3.slice(3));

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в[1, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice (1,2);
// console.log(arr);

// №8
// const  arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr);

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].

// const arr = [1, 2, 3, 4, 5]
// arr.splice(0,1)
// arr.splice(3,1)
// console.log(arr);

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b', 'c',)
// console.log(arr);

// alert()

//
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8,0,"e")
// console.log(arr);

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

// const arr=['а', 'б', 'в']
// arr.push(4,3,5,5)
// console.log(arr);

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

// const arr = ['а', 'б', 'в'];
// arr.push(4, 3, 5, 5);
// console.log(arr);

// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"].
//Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".

// №4
// const fruits = ["Apple", "Orange", "Pineapple", "Cherry"];
// const removedElement = fruits.shift();
// fruits.splice(2, 0, removedElement);
// console.log(fruits);

// №5

// Дан массив вырезать самый длинный элемент

// let fruits = ["Apple", "Orange", "Pineapple", "Cherry"];
// let longestFruit = "";
// for (const fruit of fruits) {
//   if (fruit.length > longestFruit.length) {
//     longestFruit = fruit;
//   }
// }
// const index = fruits.indexOf(longestFruit);
// if (index !== -1) {
//   fruits.splice(index, 1);
// }
// console.log("Самый длинный элемент был:", longestFruit);

// Задание №6
// const letters = ['a', 'b', 'c', 'd', 'e'];
// Удалить 3 элемента, начиная с индекса 2, и сохранить их в переменной 'removed'

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const removed = arr.splice(2, 3);
// console.log(arr);
// console.log(removed);

// Задание №7
// const colors = ['red', 'green', 'blue'];
// Вставить 'yellow' и 'purple' перед индексом 1

// const arr = ['red', 'green', 'blue'];
// arr.splice(1, 0, 'yellow', 'purple');
// console.log(arr);

// №8
// const fruits = ['apple', 'banana', 'orange'];
// Заменить 1 элемент, начиная с индекса 1, на 'grape' и 'kiwi'

// const fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 1, 'grape', 'kiwi');
// console.log(fruits);

// Задание №9
// const numbers = [1, 2, 3, 4, 5];
// Удалить 2 элемента, начиная с индекса 2

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 2);
// console.log(numbers);

// №10
//     let str = "dlroW olleH";
//     let arr=str.split('').reverse().join('')
// console.log(arr);
// вывести Hello World

// const letters = ['a', 'b', 'c', 'd', 'e'];

// const removed = letters.splice(2,3)

// console.log(removed);

// Удалить 3 элемента, начиная с индекса 2, и сохранить их в переменной 'removed'

// Вставить 'yellow' и 'purple' перед индексом 1

// const colors = ['red', 'green', 'blue'];
// const arr = ['red', 'green', 'blue'];
// arr.splice(1, 0, 'yellow', 'purple');
// console.log(arr);

// const fruits = ['apple', 'banana', 'orange'];
// Заменить 1 элемент, начиная с индекса 1, на 'grape' и 'kiwi'

// const numbers = [1, 2, 3, 4, 5];
// Удалить 2 элемента, начиная с индекса 2
// Задание №1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".

// ["Life", "is", "hard"]
// С помощью метода splice замените слово "hard" на "good".

// let arr1 = ["Life", "is", "hard"]
// arr1.splice( 2 ,1, "good")
// console.log(arr1);

// Создайте переменную arr, в которой хранится массив вида:

//  ["один","два","три","четыре"]
// Используя метод join, напишите код, который объединяет
// все элементы массива в строку. Между словами должен быть знак +.

// let arr = ["один","два","три","четыре"]
// console.log(arr.join ("+"));

// const names = [
//     "Helen",
//     "Tom",
//     "Jack",
//     "Peter",

//     "Jessica",
//     "Bob",
//     "Jimm",
//     "John",

//     "Alexa",
//     "Jessy",
//     "David",
//     "Paul",
//   ];

// let res = names.map((el)=> el.length);

// console.log(res);

// let arr = ["Paul", "John", "George", "Ringo", "Yoko"];

// let result = arr.filter((el,index)=>{
//     if (index % 2 === 0 ){
//         return el;
//     }
// });
// console.log(result);

// let arr = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]
// let result = arr.filter((el)=> el % 2 === 0 );
// console.log(result);

// let arr = [22, 3, 6, 12, 33, 66, 93, 27, 50, 88, 34, 3, 5, 8, 10];
// let res = arr.filter((el)=>{

// })

// вывести числа которые четные и больше 10
// let str =  "JavaScript";
// let str1 = "a"
// let arr = str.split ("").filter((el)=>{
//     return el === str1;
// }).length;
// console.log(arr);

// function calculateGrade(score1, score2, score3) {
//     const averageScore = (score1 + score2 + score3) / 3;
//     if (averageScore >= 90 && averageScore <= 100) {
//         return "A";
//     } else if (averageScore >= 80 && averageScore < 90) {
//         return "B";
//     } else if (averageScore >= 70 && averageScore < 80) {
//         return "C";
//     } else if (averageScore >= 60 && averageScore < 70) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// const score1 = 85;
// const score2 = 92;
// const score3 = 78;
// const result = calculateGrade(score1, score2, score3);
// console.log("Средняя оценка:", result);

// ПРАКТИКА//

//     Создайте массив чисел и используйте метод reduce, чтобы найти их сумму.
//    const numbers = [10, 20, 30, 40, 50];

//    const sum = numbers.reduce((acc, el) => {
//    return acc + el;
// }, 0);

// console.log(sum);

// Создайте массив строк и используйте метод map, чтобы получить новый массив строк, в котором все буквы будут в верхнем регистре.
//   const abd = ["js", "css", "html"];
//   const acd = abd.map(function(str) {
//   return str.toUpperCase();
//  });

//     console.log(acd);

// Создайте массив чисел и используйте метод filter, чтобы получить массив только с четными числами.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(num);

// Создайте массив строк и используйте метод includes, чтобы проверить, содержится ли определенная строка в массиве.

//    const  miin = ["mmm", "ttt", "sss", "rrr", "ppp"];
//  console.log(miin.includes("mmm"));
//    console.log(miin.includes("zoy"));

// Создайте массив объектов и используйте метод map, чтобы получить новый массив, содержащий только определенные свойства объектов.
// Создаем массив объектов
// const children = [
//     { name: "Cholpan",
//     age: 15,
//     city: "Bishkek" },
//   ];
//   const names = children.map(person => {
//     return { name: person.name };
//   });
//   console.log(names);

// Создайте массив чисел и используйте метод reduce, чтобы найти максимальное число в массиве.
// Создаем массив чисел
// function arr (numbers) {
//         return numbers.reduce((acc, el) => {
//                     if (acc > el) {
//                         return acc
//                     }
//                     return el
//         })
//     }
//     console.log(arr([10, 20, 30, 40, 50]));

// Создайте массив чисел и используйте метод reduce, чтобы найти их сумму.
// const arr = [1, 2, 1000, 3, 4, 5];
// const res = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(res);

//Создайте массив строк и используйте метод map, чтобы получить новый массив строк, в котором все буквы будут в верхнем регистре.
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];
// const res = arr.map((el) => {
//   return el.toUpperCase()
// });
// console.log(res);

//Создайте массив чисел и используйте метод filter, чтобы получить массив только с четными числами.
// const arr = [1,2,3,4,5,6 ,7,8,9,10]
// const res = arr.filter((el) => {
//     return el %2 === 0
// })
// console.log(res);

//Создайте массив строк и используйте метод includes, чтобы проверить, содержится ли определенная строка в массиве.

// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema" , "Cholpan"];
// const result = arr.some((el, index) => {
//   return el === "Cholpan";
// });
// console.log(result);
// console.log(arr.includes("Jibek"));

//Создайте массив объектов и используйте метод map, чтобы получить новый массив, содержащий только определенные свойства объектов.
// const acc = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// const ass = arr.map((el) => {
//     return el %2
// })
// console.log(ass);

//Создайте массив чисел и исполь.toUpperCase() зуйте метод reduce, чтобы найти максимальное число в массиве.
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const jok = numbers.reduce((acc, el) => {
//   if (acc > el) {
//     return acc;
//   }
//   return el;
// });
// console.log(jok));

//Создайте массив строк и используйте метод filter, чтобы получить массив строк, длина которых больше определенного значения.

//Создайте массив объектов и используйте метод sort, чтобы отсортировать их по убыванию определенного свойства.
// const arr = [1, 9, 2, 5, 6,4]
// const res = arr.sort((a ,b) => {
//     return a - b
// })
// console.log(res);

// Создайте массив чисел и используйте метод sort, чтобы отсортировать их по возрастанию.
// const arr = [1, 3, 2 , 5, 8, 6, 7, 9, 4]
// const res = arr.sort((a, b) => {
//     return a - b
// })
// console.log(res);

// Создайте массив строк и используйте метод includes, чтобы проверить, содержится ли хотя бы одна строка с определенным значением.
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];
// const result = arr.some((el, index) => {
//   return el === "Marlen";
// });
// console.log(result);
// console.log(arr.includes(""));

// Создайте массив объектов и используйте метод filter, чтобы получить массив объектов с определенным значением свойства.
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];
// const res = arr.filter((el) => {
//     return el
// })
// console.log(res);

//Создайте массив объектов и используйте метод reduce, чтобы вычислить сумму значений определенного свойства.
// const arr = [1, 2, 10, 3, 4, 5];
// const res = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(res);

//Создайте массив объектов и используйте метод reduce, чтобы вычислить сумму значений определенного свойства.
// const arr = [1, 2, 10, 3, 4, 5];
// const res = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(res);

// 1) Удвоение элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.
// function goo (numbers) {
//     return numbers.filter((el) => {
//         return el
//     })
// }
// console.log(goo(["Sydykzhan"]));

// 2) Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.
// function goo (numbers) {
//     return numbers.map((el) => {
//         return el.toUpperCase()
//     })
// }
// console.log(goo(["Cholpan","Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"]));

// 3)  Вычисление суммы элементов массива. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.
// function goo (number) {
//     return number.reduce((acc , el) => {
//         return acc + el
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 4) Фильтрация элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function goo (number) {
//     return number.filter((el) => {
//         return el % 2 === 0
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 5) Преобразование строк в числа
// Напишите функцию, которая принимает массив строк, содержащих числа, и возвращает новый массив, в котором каждая строка преобразована в число.
// function goo (number) {
//     return number.reverse((el) => {
//         return el
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function goo (number) {
//     return number.filter((el) => {
//         return el % 2 === 0
//     })
// }
// console.log(goo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 7) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];
// function goo (number) {
//     return number.Math.abc((el) => {
//         return el
//     })
// }
// console.log(goo([-2, -1, 0, 1, 2, 3, 4, 5]));

// 8) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки определенной длины. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const lip = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// console.log(lip.length);

// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50];
// function arr (numbers) {
//     return numbers.reduce((acc, el) => {
//                 if (acc > el) {
//                     return acc
//                 }
//                 return el
//     })
// }

// console.log(arr([10, 20, 30, 40, 50]));
//     return numbers.reduce((acc, el) => {
//                 if (acc > el) {
//                     return acc
//                 }
//                 return el
//     })
// }

// console.log(arr([10, 20, 30, 40, 50]));

// 12) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, состоящие только из заглавных букв. const words = ['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY'];
// function goo (numbers) {
//     return numbers.filter((el, index) => {
//         return el [0].toUpperCase()
//     })
// }
// console.log(goo(['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY']));

// 13) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые являются четными и больше 5. const numbers = [2, 4, 6, 7, 8, 10, 11];
// function goo (number) {
//     return number.filter((el) => {
//         return el > 5
//     })
//     return el %2 === 0
// }
// console.log(goo([2, 4, 6, 7, 8, 10, 11]));

// 14) Напишите функцию, которая принимает массив значений различных типов данных и возвращает новый массив, содержащий только значения определенного типа.
//  const values = [1, 'apple', true, null, 'banana', 5, false];

//  function goo (arr, typeToFilter) {
//     const oop = arr.filter(function (value) {
//       return typeof value === typeToFilter;
//     });
//     return oop;
//   }
//   const values = [1, 'apple', true, null, 'banana', 5, false];
//   const  hoo = goo (values, 'string');
//   console.log(hoo);

// 15) Напишите функцию, которая принимает массив чисел и возвращает максимальное число из них. const numbers = [10, 5, 8, 3, 9];
// function goo(numbers) {
//     return numbers.reduce((acc, el) => {
//         if (acc, el) {
//             return acc;
//         }
//         return el
//     })
// }
// console.log(goo([10, 5, 8, 3, 9]));

// 16) Напишите функцию, которая принимает массив строк и возвращает их объединение в одну строку. const words = ['Hello', ' ', 'world', '!'];
// function goo (numbers) {
//     return numbers.join((el) => {
//         return el.split()
//     })
// }
// console.log(goo([['Hello', ' ', 'world', '!']]));

// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];
// function goo (number) {
//     return number.filter((el, index) => {
//         return el %2 === 0
//     })
// }
// console.log(goo([1, 3, 5, 2, 4, 6, 7]));

// 17) Напишите функцию, которая принимает массив чисел и возвращает среднее значение.  const numbers = [2, 4, 6, 8, 10];
// function foo (numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
//     const mas = numbers.reduce((acc, current) => acc + current, 0);
//     const poo = mas / numbers.length;
//     return poo;
//   }
//   const numbers = [2, 4, 6, 8, 10];
//   const poo = foo (numbers);
//   console.log(`${poo}`);

// 18) Напишите функцию, которая принимает массив элементов и возвращает количество вхождений определенного элемента. const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple'];
// function oof(arr, el) {
//     const los = arr.reduce((acc, current ,el) => {
//       if (arr === el) {
//         return acc + 1;
//       } else {
//         return acc;
//       }
//     }, 0);
//     return los;
//   }
//   const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple'];
//   const el = 'apple';
//   const ool = oof (fruits, el);
//   console.log(`${el}`,`${ool}`);

// 19) Напишите функцию, которая принимает массивы и возвращает их конкатенацию в один массив.

//

// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];
// 21) Напишите функцию, которая принимает массив строк и возвращает первую строку определенной длины. const words = ['apple', 'banana', 'cherry', 'date'];
// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива. const numbers = [-2, -1, 0, 3, 5, 7];
// 23) Напишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date'];

// const arr = [1, 2, 3];

// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);

// console.log(arr[arr.length - 1]);

// const arr = [5];

// .push()
// arr.push("Umar");

// console.log("Push", arr);

// .pop()
// arr.pop();

// console.log("pop", arr);

// .unshift()
// arr.unshift("Baiel");

// console.log("unshift", arr);
// .shift()
// arr.shift();

// console.log("shift", arr);

// delete
// delete arr[0];

// console.log(arr);

// console.log(arr);

// arr.forEach((el, index) => {
//   console.log(index, el);
// });

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// numbers.forEach((number) => {
//   sum = sum + number;
// });

// console.log(sum);

// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];

// const res = arr.map((el) => {
//   return el.toUpperCase() + " JS-8";
// });

// console.log(res);

// const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// const res = numbers.filter((el) => {
//   return el % 2 === 0;
// });

// console.log(res);

// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];

// .find() - дает нам тот элемент которого мы
// задали если есть в массиве
// const res = arr.find((el) => {
//   return el === "Nursultan";
// });

// console.log(res);

// .some() - дает нам тот булевой тип если
// элемент есть в массиве

// const result = arr.some((el, index) => {
//   return el === "Jibek";
// });

// console.log(result);

// console.log(arr.includes("Jibek"));

// .sort() - сортировка

// const numbers = [1, 2, 5, 8, 4, 35, 79, 0, 5, 6, 7, 3, 678679, 679, 243, 4];
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];

// const result = arr.sort((a, b) => {
//   return a > b ? "1" : "-1";
// });
// console.log(result);

// const res = numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(res);
// .reduce()

// const numbers = [1, 2, 1000, 3, 4, 5];

// const res = numbers.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// const res2 = numbers.reduce((acc, el) => {
//   if (acc > el) {
//     return acc;
//   }

//   return el;
// });

// console.log(res2);

// monkeytype = function type(obj){
// removeEventListener("mousedown")
// return type === "mousedown"  ? "mouse"
// };
// console.log(monkeytype);

// let currentDate = new Date()
// console.log(currentDate);

// function addZero(number){
//     if(number < 10){
//         return
//     }
// }
// function getCurrentTime(){
//     const date = new Date();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//    let seconds = date.getSeconds();
//     if( seconds < 10){
//         seconds = "0" + seconds;
//     }
//     let res = hour + ":" + minutes + ":" + seconds;
//     return res
// }

// console.log(getCurrentTime());

// Создайте переменную и присвойте ей строковое значение. Выведите значение этой переменной в консоль.
// const str = "Cholpan"
// console.log(str);

// Объявите массив из пяти чисел. Выведите каждый элемент массив а в консоль.
// let arr = [1,2,3,4,5]
// console.log(arr);

// Напишите функцию, которая принимает два аргумента (числа) и возвращает их сумму.
// function task (a , b){
//     return a + b;
// }
// console.log(task(1,3));
// Создайте объект с тремя свойствами: имя, возраст и город. Выведите значения свойств в консоль.
// const obj = {
// имя:"cholpan",
// возвраст:15,
// город:"bishkek"
// }
// console.log(Object.values(obj));

// Используя цикл for, выведите числа от 1 до 5 в консоль.
// for(let i = 0; i <=5 ; i++){
//     console.log(i);
// }

// Напишите условие (if), которое проверяет, является ли число четным, и выводит соответствующее сообщение в консол.
// let num = 2
// if(num % 2 == 0 ){
//     console.log("четный");
// }else{
//     console.log("гне четный");
// }

// Создайте функцию, которая принимает массив чисел и возвращает их среднее значение.
// function task(arr){
// return arr.reduce((acc,el)=>{
//     return acc + el;
// })/ 6;
// }
// console.log(task([1,2,3,4,5,6]));

// Используя цикл while, выведите числа от 1 до 3 в консоль.
// let i = 3 ;
// while(i => 0){
//   console.log(i)
//   i++;
// }

// Напишите функцию, которая принимает строку и возвращает ее длину.
// function task (str){
//     return str
// }
// / Создайте массив arr с именами пяти друзей, затем выведите эти имена по одному, используя цикл for или while.
// Примерный вывод в консоль:
// let arr = [
// "Paul John ",
// 'George ',
// 'Ringo ',
// 'Yoko',
// ]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Вам дан массив чисел:
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// for(let i = 0; i < arr.length; i++) {
//   if(i < 5) {
//     console.log(arr[i]);
//   }
// }

// выведите поочерёдно в консоль все элементы, которые меньше 5, используя цикл for или while.
// Пример вывода:
// 1 1
// 2
// 3

// Создайте массив из чисел arr.
// Напишите цикл for of, который выведет в консоль произведение всех элементов массива.
// Если в переменной arr хранится массив [2, 3, 4, 5]
// Вывод должен быть:
// 120

// т.к. 120 = 2 x 3 x 4 x 5

// let arr = [2, 3, 4, 5]
// let res = 1

// for(let task of arr) {
//     res *= task
// }

// console.log(res);

// Создайте объект в переменной obj.
// С помощью цикла for ... in выведите в консоль строки следующего формата ключ - это значение.
// Если в перемнной obj хранится такой объект:
// {'Бишкек': 'Кыргызстан',
// 'Минск': 'Беларусь',
// 'Москва': 'Россия',
// 'Киев': 'Украина'
// }

// То ваш цикл должен вывести в консоль:
// Бишкек - это Кыргызстан
// Минск - это Беларусь
// ...

//  let obj = {'Бишкек': 'Кыргызстан',
//  'Минск': 'Беларусь',
//  'Москва': 'Россия',
//  'Киев': 'Украина'
//  }
//   for(let i in obj){

//   }
//      console.log(obj.Бишкек);
//      console.log(obj.Минск);

// Создайте 2 массива arr1 и arr2 с числами.
// С помощью цикла for ... of, объедините их вместе и выведите в консоль объединенный массив в одном console.log.
// Если в перемнной arr1 хранится массив [1, 2, 3] а в arr2 [4, 5, 6]
// Вывод должен быть:
// [ 1, 2, 3, 4, 5, 6 ]
// let arr = [1, 2, 3]
// let arr1 = [,4, 5, 6]
// for(let i of arr1){
// console.log(arr + arr1);
// }

// Использовать метод concat - нельзя

// Создайте массив из чисел arr.
// С помощью цикла for ... of и оператора if посчитайте сумму
// чётных элементов массива и выведите результат в консоль.
// Например, если к переменной arr присвоено данное значение: [2, 5, 9, 15, 0, 4]
// Вывод должен быть:
// 6

// т.к. 6 = 2 + 0 + 4

// let arr = [2, 5, 9, 15, 0, 4]
//    let sum = 0
// for(let i of arr){

//     if(i % 2 === 0 ){
//     sum +=i
//     }
//     console.log(sum);
// }
//
// 1. Приветствие:
//     ◦ Напишите функцию greet, которая принимает имя в качестве аргумента и возвращает приветствие.
// function greet (name) {
//     return name + " Salam aleikum"
// }
// console.log(greet("Marlen"));

// 2. Сумма чисел:
//     ◦ Напишите функцию sumNumbers, которая принимает два числа и возвращает их сумму.
// function arr (name1 , name2) {
//     return name1 + name2
// }

// console.log(arr(5, 5));

// 3. Объединение строк:
//     ◦ Напишите функцию concatStrings, которая принимает две строки и возвращает их объединение.
// function concatStrings(a, b) {
//     return a + b
// }

// console.log(concatStrings("Marlen", "Ariet"));

// 4. Площадь прямоугольника:
//     ◦ Напишите функцию calculateRectangleArea, которая принимает ширину и высоту прямоугольника и возвращает его площадь.
// function calculateAverage(a, b) {
//     return a * b
// }

// console.log(calculateAverage(5, 6));

// 5. Проверка на четность:
//     ◦ Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
// function isEven (a) {
//     if(a %2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEven(5));

// 6. Среднее значение массива:
//     ◦ Напишите функцию calculateAverage, которая принимает массив чисел и возвращает их среднее значение.
// function calculateAverage(number) {
//     return number / 2
// }
// console.log(calculateAverage(6));

// 7. Квадрат числа:
//     ◦ Напишите функцию squareNumber, которая принимает число и возвращает его квадрат.
// function squareNumber(n) {
//     return n ** 2
// }

// console.log(n(6));

// 8. Перевод строки в число:
//     ◦ Напишите функцию convertToNumber, которая принимает строку и возвращает соответствующее число (если возможно).
// function convertToNumber(str) {
//     const number = + str
// if(!isNaN(number)) {
//     return number
// }
// return str
// }

// console.log(convertToNumber("123b"));

// 9. Определение типа:
//     ◦ Напишите функцию getDataType, которая принимает аргумент и возвращает его тип данных.
// function getDataType(a) {
//     return typeof a
// }

// console.log(getDataType(1));

// 10. Генерация случайного числа:
//     ◦ Напишите функцию generateRandomNumber, которая принимает диапазон и возвращает случайное число в этом диапазоне.

// 11. Объединение массивов:
//     ◦ Напишите функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий элементы из обоих массивов.
// function mergeArrays(arr1 , arr) {
//     return arr1.concat(arr1)
// }

// console.log(mergeArrays([1,2, 3], [1, 2, 4]));

// 12. Проверка на палиндром:
//     ◦ Напишите функцию isPalindrome, которая принимает строку и возвращает true, если она является палиндромом, и false в противном случае.
// function arr (name) {
//     const res = name.split("").reverse().jpin("")

//     if(res.toLowerCase() === name.toLowerCase()) {
//         return true;
//     }
//     return false
// }

// console.log(arr("Kazak"));

// 13. Удвоение элементов массива:
//     ◦ Напишите функцию doubleArray, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент умножен на 2.
// function doubleArray(number) {
//     return number * 2
// }

// console.log(doubleArray(1));

// 14. Преобразование к верхнему регистру:
//     ◦ Напишите функцию toUpperCase, которая принимает строку и возвращает ее в верхнем регистру.
// function toUpperCase(a) {
//     return a.toUpperCase()
// }

// console.log(toUpperCase("Marlen"));

// 15. Определение наличия элемента в массиве:
//     ◦ Напишите функцию isArrayElementPresent, которая принимает массив и элемент, и возвращает true, если элемент присутствует в массиве, и false в противном случае.
// var arr = [1, 2, 3, 4, 5];
// var value = 5;

// const isFound = arr.includes(value);
// console.log(isFound);

// 16. Конкатенация массивов строк:
//     ◦ Напишите функцию concatenateStringArrays, которая принимает два массива строк и возвращает новый массив, содержащий элементы обоих массивов.
// 17. Определение четных чисел в массиве:
//     ◦ Напишите функцию getEvenNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function getEvenNumbers(number) {
// return number.filter((el) => {
//     return el %2 === 0
// })
// }

// console.log(getEvenNumbers([1,3, 4]));

// 18. Сложение элементов массива:
//     ◦ Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.
// function sumArray(number) {
//     return number.reduce((acc, el) => {
//         return acc + el
//     })
// }

// console.log(sumArray([1,2 ,3 , 5]));

// 19. Проверка на пустоту:
//     ◦ Напишите функцию isEmpty, которая принимает массив или строку и возвращает true, если они пусты, и false в противном случае.
// const order = {};
// function isEmptyObj(object) {
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isEmptyObj(order));

// 20. Определение наличия свойства в объекте:
//     ◦ Напишите функцию isObjectPropertyPresent, которая принимает объект и свойство, и возвращает true, если свойство присутствует в объекте, и false в противном случае.
// const order = {};
// function isEmptyObj(object) {
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isEmptyObj(order));

// 21. Объединение объектов:
//     ◦ Напишите функцию mergeObjects, которая принимает два объекта и возвращает новый объект, содержащий свойства из обоих объектов.

// 22. Проверка числа на положительность:
//     ◦ Напишите функцию isPositiveNumber, которая принимает число и возвращает true, если оно положительное, и false в противном случае.
// function isEven(number) {
//   let x = Boolean();
//   if (number % 2 == 0) {
//     return  true
//   } else {
//     return false
//   }

// }

// console.log(isEven(-10));

// 23. Получение последнего элемента массива:
//     ◦ Напишите функцию getLastElement, которая принимает массив и возвращает его последний элемент.
// function getLastElement(a) {
// if(a.legnth === -1) {
//     return a[0]
// } else {
//     return a[5]
// }
// }

// console.log(getLastElement("Marlen"));

// 24. Сортировка массива:
//     ◦ Напишите функцию sortArray, которая принимает массив чисел и возвращает новый массив с отсортированными значениями.

// 25. Получение длины объекта:
//     ◦ Напишите функцию getObjectLength, которая принимает объект и возвращает количество его свойств.
// function getObjectLength(numbers) {
//     return  {
//         name: "Marlen",
//     }
// }

// console.log(getObjectLength.length);

// 26. Генерация уникального идентификатора:
//     ◦ Напишите функцию generateUniqueId,
//которая возвращает уникальный идентификатор (например, случайную строку).
// function generateUniqueId(number){
// return  number = Math.random(toString("marlen","jibek","cholpan"))
// }
// console.log(generateUniqueId());

// 27. Удаление дубликатов из массива:
//     ◦ Напишите функцию removeDuplicates,
//которая принимает массив и возвращает новый массив без повторяющихся элементов.
// function removeDuplicates(n) {
//     return n.map((el) => {
//         return el
//     })
// }

// console.log(removeDuplicates([1, 2, 3, 4, 5]));

// 28. Сумма всех аргументов:
// ◦ Напишите функцию sumAllArguments, которая принимает любое количество аргументов и возвращает их сумму.

// function sumAllArguments(number){
// let arr = [...arguments]

// let res = arr.reduce((acc, el) => {
//     return acc + el
// }, 0)
// return res
// }
// console.log(sumAllArguments(2,3,4,5,4,6,7,8,9));

// 29. Определение наличия ключа в объекте:
//     ◦ Напишите функцию isObjectKeyPresent, которая принимает объект и ключ,
//и возвращает true, если ключ присутствует в объекте, и false в противном случае.
// function isObjectKeyPresent(obj, key) {
//     return key in obj
// }

// let arr = {
//     name: "Marlen",
//     age: 15
// }

// console.log(isObjectKeyPresent(arr));
// 30. Реверс строки или массива:
//     ◦ Напишите функцию reverseStringOrArray,
//которая принимает строку или массив и возвращает его в обратном порядке.

// let num2 = +prompt("Введите любой число");
// let num3 = +prompt("Введите любой число");

// function reverseStringOrArray(str){
//    return str.split('').reverse().join('')
// }
// console.log(reverseStringOrArray('ularbek'));
// Task 1// Нам дана функция checkTask(arr) которая принимает массив с объектами с ключами name. Нужно перебрать этот массив так, чтобы функция нам вернула просто массив с именами в виде строк.

// Пример: Дан массив:

// [
// {
// name: 'Sultan',
// },
// {
// name: 'Begimay',
// },
// {
// name: 'Taalai',
// },
// {
// name: 'Eldar',
// },
// ];

// Результат: ["Sultan", 'Begimay', 'Taalai', 'Eldar'];

// Task 2
// Есть массив с числами let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]. Составьте программу, которая определяет кол-во отрицательных, кол-во положительных и кол-во нулей в массиве.

// Task 3
// Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

//Task 4
//  Даны числа от 35 до 87. Найти и напечатать те из них, которые при делении на 7 дают остаток 1, 2 или 5.

//Task 5
// Даны 3 числа при помощи условных и логических операторов выведите наибольшее,
// также учтите вариант, что числа могут быть равны

// let num1 = +prompt("Введите любой число");
// let num2 = +prompt("Введите любой число");
// let num3 = +prompt("Введите любой число");

// if(num1 > num2 && num1 > num3 ) {
//     console.log(num1);
// } else if(num2 > num1 && num2 > num3 ) {
//     console.log(num2);
// } else if(num3 > num1 && num3 > num2 ) {
//     console.log(num3);
// }

// Вам дана функция checkTask, принимающая массив arr с числами,
//выведите в консоль массив, в котором будут только положительные числа из массива arr.
// Например:
// function  checkTask(arr){
//     return arr.filter((el)=>{
//         if(el >0){
//             return el
//         }
//     })
//     }

// console.log(checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]));

// Вывод:
//  [2, 3, 5, 9, 8, 6, 7, 47, 53, 17]
// Вам дана функция checkTask, принимающая массив arr с числами.
// Используя метод reduce(), вычтите числа в массиве начиная с начала и выведите в консоль результат.
// Например:
// checkTask( [175, 50, 25])

// function checkTask(arr){
//     return arr.reduce((acc,el)=>{
//         return acc - el
//     })
// }
// console.log(checkTask([175, 50, 25]));
// Вывод:
// 100

// Данa функция checkTask(arr), принимающая в аргументы массив с числами.
// Используя forEach() и push(), создайте новый массив, состоящий из квадратов этих чисел.
// Результат возвратите из функции.
// Например, для массива:
// [1, 2, 3]
// Возвращенным значением будет:
// [1, 4, 9]
// function checkTask(arr){
//     return arr.
// }
// Напишите функци/ю checkTask(arr), принимающую в аргументы массив со строками.
// Используя метод filter(), оставьте в массиве только те строки, длина которых больше пяти символов.
// Результат выведите в консоль.
// Например, для массива:
// ['июнь', 'октябрь', 'май', 'ноябрь', 'март']
// function checkTask(arr){
//     return arr.filter((el) => el.legnth > 5)}

// console.log(checkTask ['июнь', 'октябрь', 'май', 'ноябрь', 'март']);
// Вывод будет:
// ['октябрь','ноябрь']

// function task (num){
//         return num.filter((el)=> el %2 === 0).reduce((acc, el) =>{
//             return acc + el
//         })

//     }

// console.log(task ([1,2,3,4,5,6,7,8,9,10]));

// ПРАКТИКА

// function task(number){
//     return number.reduce((acc,el)=>{
//     return acc + el
//     })
// }
// console.log(task([1,2,3,4,5,6]));

// 1. Сколько раз каждый элемент встречается в массиве:
// {kiwi: 3, apple: 2, orange: 1}

// const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
// function task(arr){
// const res ={}
// arr.forEach(el=> {
//     if(res.hasOwnProperty(el)){
// res[el]= res[el]+ 1
//     }else{
//         res[el]= 1
//     }
// });
// return res
// }
// console.log(task(fruits));

// 2. Создать массив который содержит только уникальные значения c помощбю цикла
// ['kiwi', 'apple', 'orange']

// const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

//     const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
//     function getUniqueElementsInArray(arr){
//     const uniqueElements = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueElements.includes(arr[i])) {
//         continue
//       }
//       uniqueElements.push(arr[i])
//     }
//     return uniqueElements
// }
//     console.log(getUniqueElementsInArray(myFruits));

// 3. Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст,
// а значение - массив студентов
// {
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }
// const students = [
//   { name: "alex", age: 20 },
//   { name: "mike", age: 24 },
//   { name: "masha", age: 20 },
//   { name: "stas", age: 18 },
// ];

// function task(students) {
//   const group = {};

//   students.forEach((student) => {
//     if (group.hasOwnProperty(student.age)) {
//       group[student.age].push(student);
//     } else {
//       group[student.age] = [student];
//     }
//   });

//   return group;
// }
// console.log(task(students));

// 4. Написать функцию, которая принимает два аргумента:
// массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумента равна числу,
// которое приходит вторым аргументом, функция должна
// вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.

// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

// 6. Записать строку (символы строки) в обратном порядке (2 способа)
// pizza => azzip
// const myStr = "pizza";
