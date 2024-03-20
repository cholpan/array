// Объектно-ориентированное программирование (ООП)

// ОБЪЕКТЫ В JavaScript всё является объектами, включая встроенные типы данных,
// такие как строки, числа и массивы. Объекты создаются путем определения пар ключ-значение, где ключи - это строки (или символы),
// а значения могут быть любыми типами данных.
// var person = {
//     name: "John",
//     age: 30,
//     sayHello: function() {
//       console.log("Hello!");
//     }
//   };

//   ПРОТОТИПЫ : В JavaScript объекты могут наследовать свойства и методы от других объектов, используя механизм прототипов.
// Каждый объект имеет свой прототип, который можно использовать для расширения функциональности.
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.sayHello = function() {
//   console.log("Hello, I'm " + this.name);
// };

// var cat = new Animal("Whiskers");
// cat.sayHello(); // Выведет "Hello, I'm Whiskers"

//   КОНСТРУКТОРЫ : Конструкторы - это функции, которые используются для создания экземпляров объектов с заданными свойствами и методами.
//   Конструкторы часто используются для создания классов.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var person1 = new Person("Alice", 25);
// var person2 = new Person("Bob", 30);

//   КЛАССЫ (ES6 и выше): В ECMAScript 6 и последующих версиях JavaScript была добавлена поддержка классов,
//    предоставляющая синтаксический сахар для создания конструкторов и наследования.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log("Hello, I'm " + this.name);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof!");
//   }
// }

// var dog = new Dog("Buddy");
// dog.sayHello(); // Выведет "Hello, I'm Buddy"
// dog.bark(); // Выведет "Woof!"

//   Сокрытие данных и инкапсуляция: Вы можете использовать замыкания и приватные переменные для сокрытия
//    данных в объектах и обеспечения инкапсуляции.
// function Counter() {
//     let count = 0;

//     this.increment = function() {
//       count++;
//     };

//     this.getCount = function() {
//       return count;
//     };
//   }

//   let counter = new Counter();
//   counter.increment();
//   console.log(counter.getCount()); // Выведет


// SWITCH CASE//
// const age = 15
// function foo (month){
//   if(month >= 1 && month<= 3 || month == 12){
//     return "winter"
//   }else if (month >= 3 && month < 6){
//     return "spring"
//   }else if (month >= 6 && month < 9 ){
//     return "summer"
//   }else if ( month >= 9 && month < 12){
//     return "autumn"
//   }else{
//     return "Error";
//   }
// }

// function get(month){
//   switch (true){
// case (month >= 1 && month<= 3)|| month == 12:{
//   return "winter"
// }case month >= 3 && month < 6 :{
//   return "spring"
// }case month >= 6 && month < 9 :{
//   return "summer"
// }case month>= 9 && month < 12:{
//   return "autumn";
// }
// default:{
//   return "Error";
// }
//   }
// }
// console.log(get(12));

// const numbers = [
//   "Marlen",
//   "Erlan",
//   "Ularbek",
//   "Asema",
//   "Nuraiym",
//   "Cholpan",
//   "Jibek",
//   "Chyngyz",
//   "Baiel",
//   "Sultan",
//   "Bekzat",
//   "Nurlan",
// ];

//  function findByName(arr,a){
//   let name = false;

//   arr.forEach((el) => {
//     switch(true){
//       case el === a:{
//        name = true;
//         return ;
//       }
//       default:{
//         return;
//       }
//     }
//   });
//   return name;
//  }
//  console.log(findByName(numbers,"Kurmanbek"));


//цикл



//  1. Выведите столбец чисел от 1 до 50.
// for (let i = 0;  i <= 50 ; i++){
//   console.log(i);
// }
//  2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// const arr = []
// for(let i = 0; i <= 10; i++){
//   arr.push("Cholpan")
// }
// console.log(arr);
//   3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// const str = [5, 3, 1, 2, 7]
// for (let i = 0 ; i <str.length; i++){
// console.log(str[i]);
// }
//   4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// const arr =[5, 2, 1, 2]
// let ask = 1;
// for( let i = 0; i < arr.length; i++){
//   ask = ask*arr[i];
// }
// console.log(ask);
//   5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for ( let i = 0;i <= 100; i++){
//   if (i % 2 === 0){
// console.log(i);
//   } 
// }
//   6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum = 0;
// for( let i = 0; i <100  ;i++){
//   sum=sum + i ;
// }
// console.log(sum);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const num = [2, 4, 5, 6, 8];
// let skr = 0
// for( let i = 0 ;  i < num.length  ; i++){
//   skr = skr + num [i]
// }
// console.log(skr);

//    8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// const str1 = [3, 4, 6, 12, 3, 5];
// for ( let i = 0; i <str1.length; i++){
// if ( str1[i]> 3 && str1 [i]<10){
//   console.log(str1[i]);
// }
// }

//   9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr =  0
// const str = [21,-12,6,7,-2,65]
// for(let i  = 0; i <str.length; i++){
//     if(str[i]>0){
//         arr = arr + str[i];
//     }
// }
// console.log(arr);

//   10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// const arr = [5,4, 1, 3, 7, 6, 15, 3, 20]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 4){
//         console.log("yes");
//         break;
//     }

// }
// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива,
//  которые начинаются на цифру 1, 2 или 5.

//   const arr = [10, 20, 30, 40, 135, 2000]
//  for(let i = 0; i < arr.length; i++){
// const el = arr[i].toString()
// if(el.startsWith("1")  el.startsWith("2")  el.startsWith("5")){
//     console.log(+el);
// }
//  }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].
//  С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// let str = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = "";
// for (let i = 0; i < str.length; i++) {
//   if (i == 0) {
//     arr = arr + -${str[i]}-;
//   } else {
//     arr = arr + ${str[i]}-;
//   }
// }
// console.log(arr);

// 13. Вам дано число n=1000. Делите его на 2 столько раз,
//  пока результат деления не станет меньше 50.
//  Какое число получится? Посчитайте количество итераций,
//  необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let num = 0;

// for (num = 0; n >= 50; num++) {
//   n /= 2;
// }

// console.log(n);
// console.log( num);

// let i = 35
// while(i <=87 ){
// if( i % 7 === 5){
//     console.log(i);
// }
//     i--
// }   


// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9].
//  Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// const arr = [1, 2, 3, 7, 6, 9];
// let or = 0;

// for (let i = 0; i < arr.length; i++) {
//   or += arr[i];
// }

// const of = or / arr.length;

// console.log( of);

// 15. Вам дан массив с числами [1, 2, 3, 4, 5].
//  С помощью цикла найдите сумму квадратов элементов этого массива.

// const arr = [1, 2, 3, 4, 5];
// let arr1 = 0;

// for (let i = 0; i < arr.length; i++) {
//   arr1 += arr[i] ** 2;
// }

// console.log(arr1);

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// const num = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0 && num[i] < 10) {
//     console.log(num[i]);
//   }
// }

// 17. Создайте переменную с пустым массивом,
// заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

//  const str = []
//  for(let i = 0; i <=10; i++){
//     str.push (  12,8374,54,4,3,65)
//  }
//  console.log(str);

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// let n = 0;

// for (let i = 1; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     n += i;
//   }
// }

// console.log( n);

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// const pop = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// for (let i = 0; i < pop.length; i++) {
//   if (pop[i] > 10 && pop [i] % 2 !== 0) {
//     console.log(pop[i]);
//   }
// }

// 20.

// let str = 'jzvzszrzpz';
// let str1 = '';

// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 1) {
//     str1 += str[i].toUpperCase();
//   } else {
//     str1 += str[i];
//   }
// }

// console.log(str1);

// while

// let i = 0
// while (i<= 100){
//   if (i % 2 ===0){
//   console.log(i);
//   }
//   i++;
// }

// do while

// let i = 40
// do {
//   console.log(i);
//   i++
// }while(i < 50)

// for in

// const arr  =[
//   'Asema',
//   'Cholpan',
//   'jibek',
//   'ularbek',
//   'marlen',
//   'nuraiym'
// ]
// for(index in arr){
//   console.log(index);
// }
// for ( el of arr){
//   console.log(el);
// }\



                          // ПРАКТИКА

    // /1. Вывести квадраты чисел от 1 до 5.
    // let i = 1;
    // while (i <= 5) {
    //     const sqrt = i * i;
    //     console.log( sqrt);
    //     i++;
    // }
    


//2. Вывести таблицу умножения на 7.
// let i = 0
// while (i<= 10){
//   console.log(`7 ${i} = ${i * 7}`);
//   i++
// }

//3. Вывести числа от 10 до 1 в обратном порядке.
// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// 4 посчитать факториал числа от 1 до 5
// let i = 1
// let sum = 1
// while ( i <= 5){
//   sum = sum * i;
//   i++
// }
// console.log(sum);

//5  Вывести каждую вторую букву в строке "Hello, World!".
// const str = "Hello, World!";
// let i = 0;

// while (i < str.length) {
//     if (i % 2 === 0) {
//         const letter = str.charAt(i);
//         console.log(letter);
//     }
//     i++;
// }


//6 Посчитать количество гласных букв в строке "JavaScript".
// let str = "JavaScript"
// let vowels = "aeiou"
// let i =0
// let res = ""
// while( i <= str.length){
//   if(vowels.includes(str[i])){
//     res += str[i]
//   }
//   i++
// }

// console.log(res);

//7 Вывести числа от 1 до 100, заменяя числа, кратные 3, на "Fizz", а числа, кратные 5, на "Buzz".
// let i = 1;
// while (i <= 100) {
//   if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   }else {
//     console.log(i);
//   }
//   i++;
// }

// 8 Найти сумму нечетных чисел от 1 до 50.
// let i = 1
// let sum  = 0
// while (i < 50){
// if( i % 2 != 0)
// i++;
// }
// console.log(i);

// 9 Вывести числа от 1 до 10, и если число равно 7, прервать выполнение цикла.
// let i = 1
// while (i <= 10){
//     if( i == 7)
//     break
//     i += 1
// };
// console.log(i);
    


//10 Вывести числа от 1 до 10, и если число равно 5, пропустить его.
// let i = 1
// while ( i <= 10){
//     if ( i === 5){
//         console.log( i);
//         i += 1
//     }
//     i++
// }
// 11 Найти наименьший делитель числа 15 (кроме 1).
// let number = 15;
// let i = 2;

// while (number % i !== 0) {
//     i++;
// }        

// console.log(i);
                
//12  Вывести каждую букву в строке "JavaScript" в обратном порядке.
// let str = "JavaScript";
// let i  = str.length - 1;

// while (i >= 0) {
//     console.log(str[i]);
//     i--;
// }

// 13 Посчитать сумму чисел в массиве [1, 2, 3, 4, 5].
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// console.log(sum);


    //14  Вывести только четные числа из массива [1, 2, 3, 4, 5].
    // const numbers = [1, 2, 3, 4, 5];
    // let i = 0;
    
    // while (i < numbers.length) {
    //     const sum = numbers[i];
    //     if (sum % 2 === 0) {
    //         console.log(sum);
    //     }
    //     i++;
    // }
        
    //15 Посчитать количество отрицательных чисел в массиве [-2, 0, 1, -5, 4].
// const numbers = [-2, 0, 1, -5, 4];
// let go = 0;
// let i = 0;

// while (i < numbers.length) {
//     if (numbers[i] < 0) {
//         go++;
//     }
//     i++;
// }

// console.log(go);


//16 Вывести элементы массива [3, 6, 9, 12] в обратном порядке.
// const arr = [3, 6, 9, 12];
// let i = arr.length - 1;

// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }


    //17  Посчитать сумму квадратов элементов массива [2, 4, 6, 8, 10].
//     const numbers = [2, 4, 6, 8, 10];
//     let sums = 0;
//     let i = 0;

//     while (i < numbers.length) {
//     const cur = numbers[i];
//     const sqrt = cur * cur;
//     sums += sqrt;
//     i++;
// }

// console.log( sums);


// 18 Вывести каждый второй элемент массива ["a", "b", "c", "d", "e"].
// const arr = ["a", "b", "c", "d", "e"];
// let i = 1; 
// while (i < arr.length) {
//   console.log(arr[i]);
//   i += 2; 
// }

//19 Посчитать количество букв "a" в строке "JavaScript is awesome".
// const str = "JavaScript is awesome";
// let doo = 0;
// let i = 0;

// while (i < str.length) {
//   if (str[i] === "a" ) {
//     doo++;
//   }
//   i++;
// }

// console.log(doo);


// const str = s.split(" ").reduce((acc,el)=>{
//   if(acc.length > el.length){
//     return el
//   }
//   return acc
// })
// return str.length

// function getSum(a, b) {
//   if (a === b) {
//     return a || b;
//   }
//   if (a > 0 && a > b && b > 0) {
//     let sum = 0;
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   if (b < 0 && b < a) {
//     let sum = 0;
//     for (let i = a; i >= b; i--) {
//       sum += i;
//     }
//     return sum;
//   }
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSum(-5, -1));

                                         //замыкание 
// function createCCounter(){
//     let count  = 0

//     return function (){
//         count++
//         return count;
//     };
// }
// const increment = createCCounter();
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// console.log(increment());




// Создайте функцию для работы с приватными переменными, используя замыкание. 
//Функция должна позволять устанавливать значение переменной и получать его.

// function createPrivateVariable(initialValue) {
    // Ваш код здесь
//     let data =  initialValue;

//     return{
//         getValue: function(){
//             return data ;
//         },
//         setValue: function(newData){
//             data = newData;
//             return;
//         },
//     };
// }

// const privateVar = createPrivateVariable(Motion);
// console.log(privateVar.getValue()); // 10
// privateVar.setValue(20);
// console.log(privateVar.getValue()); // 20


// Напишите функцию, которая использует замыкание для создания таймера.
// Функция должна принимать время (в миллисекундах) и текст, а затем через указанное время выводить этот текст в консоль.

// function createTimer(time, text) {
//     return function(){
//         setTimeout(function() {
//             console.log(text);
//         }, time);
//     };
//  }

// const timer = createTimer(2000, "Прошло 2 секунды");
// console.log(timer());
// Через 2 секунды должно быть выведено сообщение "Прошло 2 секунды"


// Напишите функцию, которая возвращает другую функцию для подсчета количества вызовов.
// Внешняя функция должна инициализировать счетчик в 0 и возвращать внутреннюю функцию, 
//которая увеличивает счетчик на 1 при каждом вызове.

// function createCounter() {
    // Ваш код здесь
//     let count  = 0
//     return function(){
//     count++;
//     return count ;
//     }
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// Напишите функцию, которая создает замыкание и возвращает другую функцию.
// Внешняя функция должна принимать аргумент и передавать его внутренней функции. 
//Внутренняя функция должна сохранять переданный аргумент и выводить его в консоль.

// function createClosure() {
    // Ваш код здесь
//     return function(data){
//         return data 
//     }
// }

// const closure = createClosure();
// closure(10); // должно вывести 10
// closure(20); // должно вывести 20
// console.log(closure(100));

// const createCounter = ()=>{
//     let count  = 0
//     return {
//     increment: function(){
//     count++;
//     return count ;
//     },
//      decrement: function(){
//     count--;
//    return count;
//     },
// };
// };
// const counter = createCounter();

//  console.log(counter.increment());// 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); /1




// function checkTask(arr) {
// const att = [];
//  for (let i = 0; i < arr.length; i++) {
//  if (arr[i].name) {
//   att.push(arr[i].name);
//       }
//     }
//     return att;
//   }

//   const ytt = [
//     {
//       name: 'Sultan',
//     },
//     {
//       name: 'Begimay',
//     },
//     {
//       name: 'Taalai',
//     },
//     {
//       name: 'Eldar',
//     },
//   ];
  
//   const result = checkTask(ytt);
//   console.log(result); 
  
//   /               /                /        /   
// РЕКУРСИЯ//
// /                /                /          / 

// Это функция которая вызывает саму себя в своем теле .

// console.log(Math.pow(5,5));
// console.log(Math.pow(3,3));

// function pow(x,m){
//     let res = 1     
//     for(let i = 1; i <= m; i++){
//         res = res * x;
//     }
//     return res;
// }
// console.log(pow(3,5));

// function pow2 (x,m){
//     if(m == 1){
//         return x;
//     }
//     return x * pow2(x,m - 1);
// }
// console.log(pow2(3,3));

    // function up (numbers){
    // let tr = numbers.reduce((acc,el)=>{
    // return acc + el
    // },0);
    // return tr;
    // }
    // console.log(up([1,2,3,4,5,7,8,9]));
    // console.log(up([10,20,30,40,50]));

// const getSum = (numbers)=>{
//     if (numbers.length === 1){
//         return numbers[0];
//     }
//     return numbers[0] + getSum(numbers.slice(1))
// };

// console.log(getSum([1,2,3,4,5,7,8]));
// console.log(getSum([10,20,30,40]));

// function factorial(n){
//     if ( n === 1){
//         return n    
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5));
// console.log(factorial(4));

// function few(n){
// if ( n === 1){
//     return n 
// }
// return n + few( n -1 )
// }
// console.log(few(10));


// Напишите рекурсивную функцию для проверки, является ли число четным.
// const rew = (n)=>{
// if (n == 1 || n == - 1){
//     return false
// }
// if (n >0){
//     return rew ( n - 2)
// }
// if(n < 0){
//     return rew(n - - 2)
// }
// return true
// }
// console.log(rew(10));
// console.log(rew(6));


// Напишите рекурсивную функцию для вычисления факториала числа.
// function factorial(n){
//     if ( n === 1){
//         return n
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(7));
// console.log(factorial(9));


// Напишите рекурсивную функцию для нахождения суммы всех элементов массива.
// const  arr =  (numbers) =>{
//     if(numbers.length === 1) {
//         return numbers[0]
//     }
//     return numbers[0] +arr(numbers.slice(1))
// }
// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));


// Напишите рекурсивную функцию для нахождения наибольшего числа в массиве.
// function arr(n){
//   if(n.length > 2){
//     const e = n[0];
//     n.splice(0, 1);
//     return arr([e, arr(n)])
//   } else {
//     return n[0] >= n[1] ? n[0] : n[1]
//   }
// }
// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));


// Напишите рекурсивную функцию для нахождения наименьшего числа в массиве.
// function arr(n){
//   if(n.length < 2){
//     const e = n[0];
//     n.splice(0, 1);
//     return arr([e, arr(n)])
//   } else {
//     return n[0] <= n[1] ? n[0] : n[1]
//   }
// }
// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));


// Напишите рекурсивную функцию для обратного вывода строки.
// function few(str) {
//     if (str === "") {
//       return "";
//     }
//     const wer = str.charAt(0);
//     const rew = str.slice(1);
//     return few(rew) + wer;
//   }
//   const sub = "Hello, World!";
//   const reversedString = few(sub);
//   console.log(reversedString); 


// Напишите рекурсивную функцию для проверки, является ли строка палиндромом.
// function isPalindrome(str) {
//     str = str.toLowerCase().replace(" ");
//     if (str.length <= 1) {
//       return true;
//     }
//     if (str[0] !== str[str.length - 1]) {
//       return false; 
//     }
//     return isPalindrome(str.slice( 1,str.length - 1));
//   }
//   console.log(isPalindrome("Aziza")); 
//   console.log(isPalindrome("Hello"));   

// Напишите рекурсивную функцию для нахождения N-го числа Фибоначчи.


// Напишите рекурсивную функцию для возведения числа в степень.
// function power(n, m){
//     if (m == 1){
//         return n 
//     }
//     else {
//         return n * power(n, m - 1)
//     }
// }
// console.log(power(2,3));


// Напишите рекурсивную функцию для нахождения наибольшего общего делителя двух чисел.
// function trye (a, b) {
//   if (b === 0) {
//     return a;
//   } else {
//     return trye (b, a % b);
//   }
// }
// const num1 = 48;
// const num2 = 18;
// const tree = trye(num1, num2);
// console.log( num1, num2, tree);


// Напишите рекурсивную функцию для проверки, является ли число простым.
// function eeee(num) {
//     if (num <= 1) {
//       return false;
//     }
//     if (num <= 3) {
//       return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//       return false;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   const num = 17;
//   const trew = eeee(num);
//   console.log(num , trew );
  

// Напишите рекурсивную функцию для проверки, является ли число четным.
// const rew = (n)=>{
// if (n == 1 || n == - 1){
//     return false
// }
// if (n >0){
//     return rew ( n - 2)
// }
// if(n < 0){
//     return rew(n - - 2)
// }
// return true
// }
// console.log(rew(10));
// console.log(rew(6));


// Напишите рекурсивную функцию для нахождения всех перестановок строки.
// function task(str) {
//     if (str.length === 1) {
//       return [str];
//     }
//     let putt = [];
//     for ( i = 0; i < str.length; i++) {
//       let few = str[i];
//       let rew = str.slice(0, i) + str.slice(i + 1);
//       let innerPutt = task(rew);
//       for (let j = 0; j < innerPutt.length; j++) {
//         putt.push(few + innerPutt[j]);
//       }
//     }
//     return putt;
//   }
//   let iter = "abc";
//   let result = task(iter);
//   console.log(result);
  

    // Напишите рекурсивную функцию для нахождения суммы цифр числа.
    // function getSum(number) {
    //     if (number < 10) {
    //         return number;
    //     } else {
    //         const trew = number % 10;
    //         const drew = Math.floor(number / 10);
    //         return trew + getSum(drew);
    //     }
    // }
    // const number = 12345;
    // const result = getSum(number);
    // console.log(number,result);
    

// Напишите рекурсивную функцию для нахождения наибольшего элемента в дереве.


// Напишите рекурсивную функцию для сортировки массива методом "разделяй и властвуй" (например, сортировка слиянием).
// Функция для слияния двух отсортированных массивов

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0; 

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// }
// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
// }
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = mergeSort(unsortedArray);

// console.log("Исходный массив: " + unsortedArray);
// console.log("Отсортированный массив: " + sortedArray);


// Напишите рекурсивную функцию для нахождения всех путей в графе от одной вершины к другой.
// Напишите рекурсивную функцию для нахождения всех подмножеств заданного множества.
// Напишите рекурсивную функцию для нахождения всех возможных комбинаций заданного набора элементов.
// Напишите рекурсивную функцию для решения головоломки "Ханойские башни" с использованием трех штырей.



///
// FIND 
//

// let foo = "a" 
// switch (foo){
//     case  "a " % 2 === 0:
//         break;
//         default:
//             console.log(foo(1,2,3,4,5));
// }

// for (let i = 1; i <= 30; i++) {
//     switch (i % 2) {
//         case 0:
//             console.log(i); 
//             break;
//         default:
//             break;
//     }
// }

// array.forEach(element => {
    
//     function merge_and_sort(arr1, arr2){
    
//         merge_set = set(arr1 + arr2)
//         sorted_result = sorted(merged_set)
        
//         return sorted_result
    
//     }
//     arr1 = [1, 3, 5, 7]
//     arr2 = [2, 4, 6, 8]
//     result = merge_and_sort(arr1, arr2)
//     print(result)
// });















