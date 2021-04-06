/**
 *  Вот у меня такой вопрос.
 * Я изучил
 * property descripto
 * и не могу понять почему когда
 * их используешь с
 * полями объектами все работает,
 * а когда используешь
 * поля класса, они пишутся
 * ошибок ни каких нет, но не
 * несут в себе ни какого
 * функционала как если бы это
 * работала в объектах
 * */

// class Humen {
//   constructor(options) {
//     this.name = options.name
//     this.sname = options.sname
//     this.bornIn = options.bornIn
//     this.sex = options.sex
//     this.age = options.age
//   }
//   get voice() {
//     console.log('Heloo im ' + this.name)
//   }
// }
// const p1 = new Humen({
//   name: 'Vasili',
//   sname: 'Frey',
//   bornIn: 1998,
//   sex: 'men',
// })

// console.log('p1.name:', p1.name)

// class Men extends Humen {}
// const men = new Men({
//   name: 'Daniil',
//   sname: 'Frey',
//   bornIn: 1998,
//   sex: 'men',
// })

// men.age = 34 // я его перезаписываю
// console.log('men.age=34:', 34)
// delete men.age // я его удалил
// console.log('delete(man.age):', men.age)

// // Создаю объект

// const wuMen = Object.create(
//   {
//     culculateAge() {
//       console.log('fAge:', new Date().getFullYear() - this.birthYear)
//     },
//   },
//   {
//     name: {
//       value: 'Valeria',
//       enumerable: true,
//       writable: false,
//       configurable: false,
//     },
//     birthYear: {
//       value: 1998,
//       enumerable: true,
//       writebel: false,
//       configurable: false,
//     },
//     age: {
//       enumerable: true,
//       configurable: false,
//       get() {
//         return new Date().getFullYear() - this.birthYear
//       },
//       set(value) {
//         document.body.style.backgroundColor = 'red'
//         console.log('Set age: ', value)
//       },
//     },
//     sex: {
//       value: 'wumen',
//       enumerable: true,
//       writebel: false,
//       configurable: false,
//     },
//   }
// )

// wuMen.name = 'Кто-то другой!'
// console.log('После wuMen.name = Кто-то другой!:', wuMen.name) // работает правильно
// wuMen.age = 55
// console.log('После wuMen.age = 55:', wuMen.age) // работает правильно
// wuMen.birthYear = 2000
// console.log('После wuMen.birthYear = 2000:', wuMen.birthYear) // работает правильно
// delete wuMen.name
// console.log('После delete(wuMen.name):', wuMen.name) // работает правильно

// // ни чего не поменялось ни чего ни удалилось ровно так как я и хотел
// // а в класах я пока не понял как такого добиться.

class Re