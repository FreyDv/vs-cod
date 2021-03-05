const Per = {
  firstName: 'Daniil',
  lastName: 'Frey',
  bithdeyCount: 0,
  year: 1998,
  age: (year, countBD) => {
    return new Date().getFullYear() - year - countBD
  },
  languges: ['Ru', 'En', 'Ua'],
  isMeris: true,
  'complex key': 'Complex Value',
  greet: function () {
    console.log('greet from Per ' + this.firstName)
  },
  addLanguage: (len) => {
    if ('string' == typeof Per.languges[0]) {
      if ('string' == typeof len) {
        Per.languges.push(len)
        console.log('Сейчас ' + Per.firstName + ' знает ' + Per.languges.length)
        let xas = 0
        Per.languges.forEach((element) => {
          console.log(xas++ + ': ' + Per.languges[xas - 1])
        })
      }
    }
  },
  //z: function happyBirthday(Per.age(Per.year,Per.countBD())) {
  //  Per.bithdeyCount++
  //  console.log(`С днем рождения!!!! теперь ${
  //    Per.firstName
  //  } имеет солидный возраст `,)
  // },
}

console.log('0 Per:', Per)
console.log(
  '1 Обращение к полям через имя поля (Per.firstName):',
  Per.firstName
)
console.log(
  '2 Обращение к полям через имя поля в строке (Per[age]):',
  Per['age']
)

console.log('3 Per.greet():', Per.greet())

console.log('4 Per["complex key"]:', Per['complex key'])

var a = 'xer'
b = 'pisa'
z = typeof a == 'string'
console.log('a==b:', z)

Per.addLanguage('germani')
console.log('Per.year:', Per.year)
console.log('Per.bithdeyCount:', Per.bithdeyCount)
console.log('new Date().getFullYear():', new Date().getFullYear())
console.log('Per.age:', Per.age(Per.year, Per.bithdeyCount))

const {
  firstName: namex,
  lastName: sername,
  age: aaa = Person.age(Per.year, Per.bithdeyCount),
} = Per
console.log(
  `Деструктивизация Per в  переменные name,sername,age
const {firstName:name, lastName:sername, age}=Per :`,
  namex + ' ' + sername + ' ' + aaa
)

const logger = {
  keys() {
    console.log('Object Keys:', Object.keys(this))
  },

  keysValue() {
    Object.keys(this).forEach((key) => {
      console.log(key + ': ', this[key])
    })
  },
}

const bound = logger.keys.bind(Per) // Создает функцию с привязаным контекстом который мы передали
bound()

logger.keys.call(Per) // просто выплевывает тоже самое что и бинд но привязывет только на момент выплевывания
logger.keysValue.call(Per)
