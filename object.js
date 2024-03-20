// object - это один из более важных типов данных в джава скрипт.
// Каждый объект уникален от  другого и в себе хронит ссылки.
// Другие  типы данных они примитивны а объект уникален .
// набор данных набор переменных
// 0 = false

// const obj = {
//     name:"Nursultan",
//     age:18,
//     height:180,
// }
// console.log(obj);

// const car = {
//     марка:"Toyota",
//     цвет:"черный",
//     модель:"camry",
//     объем:3.5,
//     isActive:true,
//     88:"99"
// };

// console.log(car);
// console.log(car.марка);
// console.log(car.объем);
// console.log(car("модель"));
// console.log(console.log("88"));
// console.log(("объем"));

// const phone ={
//     name:"iphone",
//     model:"14 pro max",
//     memory:256,
//     price:"1090$",
// };

// in || .hasOwnProperty() - проверяет есть ли в объекте такое свойство

// console.log("name" in phone);
// console.log("color" in phone);

// console.log(phone.hasOwnProperty("name"));//true
// console.log(phone.hasOwnProperty("color"));//false

// Object.freeze()- замораживает объект
//  Object.freeze(phone);

// изменяет значение объекта
// phone.name = "Samsung";
// добавляет новые свойства
// phone.color = "Purple";
// phone.colors = ["black", "white", "purple", "gold"];

// удаляет свойство в объекте
// delete phone.memory;

// console.log(Object.values(phone));

// console.log(Object.keys(phone));

// practice ///
// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// const obj = {a: 1, b: 2, c: 3, d: 4}
// const result = Object.keys(obj)
// console.log(result.length);
// console.log(Object.keys(obj).length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// const obj = {a: 1, b: 2, c: 3}
// console.log(obj.c);
// console.log(obj ["c"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// Создаем объект с зарплатами
// const obj = {Ширин: '1000', Айжан: '500', Атай: '200'};
// console.log('Зарплата Атая: ' + obj['Атай']);
// console.log('Зарплата Ширин: ' + obj['Ширин']);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
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
// const obj= {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенья",
// }
// console.log(obj[7]);

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

// function arr3 [{id: 3}, {id: 5}, {id: 6}, {id: 7} ] {
// return Object.keys(id).map
// }
// console.log(arr3);
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
//     obj.price = (obj.price/100) *10;
//     product.price = (product.price / 100) * 7;
//   }
//   console.log(obj);

// метод || THIS

///THIS //
// console.log(this === window);
// a = "5"
// console.log(window);
// console.log(this.a);
// console.log(a);

// const obj = {
//     name:"Motion",
//     car:{
//         name:"BMW",
//         lastName:this.name,
//     },
// };

// const obj = {
//     name:"Motion",
//     getName:function(a) {
//         return this.name + a;
//     },
// };

// console.log(obj);
// console.log(obj.name);
// console.log( obj.getName("Web"));

// const obj = {
//     price:100,
//     price1:100,
//     price2:100,
//     price3:100,
//     getSum:function(a){
//     return Object.values(this).filter()
//     },
// };
// console.log(obj.getSum);

// let programmer = {
//   имя: "Абдулазис",
//   фамилия: "Замирбек уулу",
//   возвраст: 18,
//   язык_программирования: "JavaScript",
//   зарплата: 50000,
// };
// console.log(programmer.имя);
// console.log(programmer.фамилия);
// console.log(programmer.возвраст);
// console.log(programmer.язык_программирования);
// console.log(programmer.зарплата);
