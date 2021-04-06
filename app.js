class Humen {
  height = 0 // Публичное поле с дефолт значение если его нет нужно задавать в колнструкторе
  width // Публичное поле без деф значения нужно задавать в конструкторе
  #hx1 = 0 // Приватные поля нужнго создовать до их исполльзования их нельзя создовать просто задав им значение
  #hx2 //Приватное поле. Не могут быть сконфигурированы из вне
  constructor(options) {
    this.name = options.name // создание поля путем присваивания ему значения
    this.sname = options.sname
    this.bornIn = options.bornIn
    this.sex = options.sex
    this.age = options.age
    this.width = options.width
  }
  get voice() {
    console.log('Heloo im ' + this.name)
  }
  obj() {
    return this // Вернет обект
  }
  static cla() {
    // Статик можно вызвать только на скласе вызов на экземпляре даст андефенит
    return this // вернет Клас
  }
}
Humen.staticProperty = 15 //Статическое свойство должно быть определенно за телом класса
Humen.prototype.prototypeProperty = 20 //Свойство прототипа должно быть определено за телом класса

/*
Почему то я могу использовать статик проперти в коде за классом но статиком я его не где не делал.
Проперти прототайп ведет себя аналогично. 

*/

const p1 = new Humen({
  // создаю ексемпляр Человека п1 и вызываю конструктор куда передаю анонимный обект опшинс с его параметрами
  name: 'Vasiliy',
  sname: 'Frey',
  bornIn: 1998,
  sex: 'men',
  age: 23,
  width: 212,
})
p1.staticProperty = 456
console.log('p1.staticProperty:', p1.staticProperty)
p1.prototypeProperty = 155
console.log('p1.prototypeProperty:', p1.prototypeProperty)
console.log('Humen.cla():', Humen.cla())
console.log('Humen.obj:', Humen.obj)
console.log('p1.cla():', p1.cla)
console.log('p1.obj():', p1.obj())

p1.voice

class Men extends Humen {
  voice() {
    console.log('Helo im:', this.name + ' ' + this.sname)
  }
}
const men = new Men({
  name: 'Daniil',
  sname: 'Frey',
  bornIn: 1998,
  sex: 'men',
})

men.voice()

// men.age = 34 // я его перезаписываю
// console.log('men.age=34:', 34)
// delete men.age // я его удалил
// console.log('delete(man.age):', men.age)
/* Создание Объекта и его дескприпторов */ {
// // Создаю объект

// const wuMen = Object.crobje(
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
}
/*Object.setPrototypeOf*/{
  
  // var Xc = { // объект
  //   voic() {
  //     console.log('Sey: ', this.name)
  //   }
  // }
  // class Som { //класс
  //   constructor(opt) {
  //     this.name = opt.name
  //     this.sname = opt.sname
  //   }
  // }
  // d = new Som({ //создание екземпляра
  //   name: 'Igor',
  //   sname: 'Domrin',
  // })
  // Object.setPrototypeOf(Som.prototype,Xc) // Функция которая создает наследования от обычного объекта
  // d.voic()//функция которая определена в обычном объекте но вызвана на екземпляре класса
}
/*super*/{
 //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/super
//   class Humen {
//     constructor(option){
//       this.name =option.name
//     }
//     sey(){
//       console.log(`${this.name} говорит!`)
//     }
//   }
//   class Daniil extends Humen {
//     constructor(option){// грубоговоря переопределяю конструктор с новой переменной только для класса Даниил 
//       super(option) // перевызываю конструктор с помощью супер для инициализации переменных которые общие для класса Даниил и Хюмен
//       this.sname= option.sname // ексклюзивная переменная для класса Даниил
//     }
//     sey(){
//       super.sey() // cначала вызовит родительский метод
//       console.log(`${this.name} КРИЧИТ!`) // переопределяет (собственный метод)
//     }
//   }
//   let l = new Daniil({name:'ddaniil',sname:'Frey'})
//   l.sey()
//   console.log('l.sname:',l.sname)
 
// }
{///////////////////////////////////////////////////////////////////////////////////////////



}
setTimeout(() => console.clear(), 10000)
