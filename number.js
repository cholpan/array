//   MATH
//  Math.abc
//  Math.ceil
//  Math.floor
//  Math.round
//  Math.pow
// console.log(Math.pow(5,5));
// Math.sqrt
// console.log(Math.sqrt(400));
// Math.random
// console.log(Math.round(Math.random()*10));

//
// FUNCTION
//
//Function Declaration - сначала объявляется функция
// function task(number) {
//     return Number.isInteger (number)
// }
// console.log(task(5));

//Function Arrow - это стрелочная функция
// const sliceName = (name) =>{
//    return   name.Length
// }
// const name ="nazmi";
// console.log(name.length);

// Function Expression - это анонимная функция, функция объявляется после открытия переменной
// let add = function ( a, b){
//     return a + b;
// }
// console.log(add());

// function task(name){
// return name
// }
// console.log(task("cholpan"));

// рекурсивная функция
// function factorial(n){
//     if( n <= 1){
//     return 1
//     }else  {
//         return n * factorial (n -1)
//     }
// }
// console.log(factorial(5));

//ARRAY
// массив-Array-глобальный объект

// const myArray = []; // создать пустой массив ,для  набора элементов

// const numbers = [1, 2, 3, 4, 5]; // создать массив с числами

// const arr = ["яблоко", "банан", "апельсин"]; // создать массив со строками
// const rew = [[1,2],[3,4]]

// .push()- добавляет элемент в конце массива
//.pop()-удаляет последний элемент массива
// arr.unshift- добавляет элемент с начала
// arr.shift- удаляет элемент в начале
// arr.push("d", "e");

// console.log(arr);
// arr.shift();
// const arr = []
// arr.unshift("Erlan", "Ularbek");
// console.log(arr);

// .splice()-удаляет элементы и заменяет
// .concat()-объединяет массивы
// №2
// const arr2  = [1,2,3]
// const arr3 = [4,5,6]
// console.log(arr2.concat(arr3));
// console.log([...arr2,...arr3]);

// .forEach()
//.filter()
//.map()

// .forEach()- ничего не возврощает,он просто пойдет по элементам
// const numbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15, 16, 17, 18, 19
//   ];

//   numbers.forEach((el)=>{
//     if(el % 2 !==  0){
//         console.log(el.toString());
//     }else{
//         console.log(el);
//     }
//   });

//.filter()- это возврощает массив

// const arr = [101,232,546,7,34,90,29,246];
// const filteredArr = arr.filter((el)=>{
//     return el > 100
// })
// console.log (filteredArr)

//.map()- индекс элемент массив

// const numbers =[10,20,30,40,50];
// const a = numbers.map((el)=>{
//     return el * 2;
// });
// console.log(a);

// .push()
// arr.push(["Umar"]);

// console.log("Umar", arr);

// .pop()
// arr.pop("chopa");

// console.log("pop",arr);

// .unshift()
// arr.unshift("Baiel");

// console.log("unshift", arr);
// .shift()
// arr.shift();

// console.log("shift", arr);

// delete
// arr.delete[0];

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

// .find() - дает нам тот элемент которого мы
// задали если есть в массиве
// const arr = []
// const res = arr.find((el) => {
//   return el === "Nursultan";
// });

// console.log(res);

// .some() - дает нам тот булевой тип если
// элемент есть в массиве
// const arr = []
// const result = arr.some((el, index) => {
//   return el === "Jibek";
// });
// console.log(result);
// console.log(arr.includes("Jibek"));

// .sort() - сортировка

// const numbers = [1, 2, 5, 8, 4, 35, 79, 0, 5, 6, 7, 3, 678679, 679, 243, 4];
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];

// const result = numbers.sort((a, b) => {
//   return a > b ? "1" : "-1";
// });
// console.log(result);

// const res = numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(res);

// .reduce()- добавляет

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

// function task (num){
//     if(num % 2 !== 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(task(10));

// let twoSum = function (nums,target){
//   let task = []                       Function Expression 

// }

// function sameCase(a,b){
// const res = "hsjjhnsbsacgnqiu";
// if( !res.includes(a.toLowerCase())|| !res.includes(b.toLowerCase())){
// return -1
// }else if( a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase() ){
//     return 1
// }else{
//     return 0
// }
// }
// console.log(sameCase("+","8"));
// console.log(sameCase("a","b"));
// console.log(sameCase("A","c"));

// function mergeArrays(arr1, arr2){
//     const num = mergeArrays.sort((arr1, arr2) => {
//       return arr1 > arr2 ? "1" : "-1";
//     });
// }
// console.log(mergeArrays([1, 2, 5, 8, 4, 35, 79,],[0,1,2,3, 5, 6, 7, 3, 678679, 679, 243, 4]));

// function mergeArrays(arr1, arr2) {
//     const mergedArray = [...arr1, ...arr2];
//     const sortedArray = mergedArray.sort((a, b) => a - b);
//     return sortedArray;
// }

// console.log(mergeArrays([1, 2, 5, 8, 4, 35, 79], [0, 5, 6, 7, 3, 678679, 679,1,2, 243, 4]));
