const Persen = {
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
    console.log('greet from persen ' + this.firstName)
  },
  addLanguage: (len) => {
    if ('string' == typeof Persen.languges[0]) {
      if ('string' == typeof len) {
        Persen.languges.push(len)
        console.log(
          'Сейчас ' + Persen.firstName + ' знает ' + Persen.languges.length
        )
        let xas = 0
        Persen.languges.forEach((element) => {
          console.log(xas++ + ': ' + Persen.languges[xas - 1])
        })
      }
    }
  },
  //z: function happyBirthday(Persen.age(Persen.year,Persen.countBD())) {
  //  Persen.bithdeyCount++
  //  console.log(`С днем рождения!!!! теперь ${
  //    Persen.firstName
  //  } имеет солидный возраст `,)
  // },
}

console.log('0 Persen:', Persen)
console.log(
  '1 Обращение к полям через имя поля (Persen.firstName):',
  Persen.firstName
)
console.log(
  '2 Обращение к полям через имя поля в строке (Persen[age]):',
  Persen['age']
)

console.log('3 Persen.greet():', Persen.greet())

console.log('4 Persen["complex key"]:', Persen['complex key'])

var a = 'xer'
b = 'pisa'
z = typeof a == 'string'
console.log('a==b:', z)

Persen.addLanguage('germani')
console.log('Persen.year:', Persen.year)
console.log('Persen.bithdeyCount:', Persen.bithdeyCount)
console.log('new Date().getFullYear():', new Date().getFullYear())
console.log('Persen.age:', Persen.age(Persen.year, Persen.bithdeyCount))

const {
  firstName: name,
  lastName: sername,
  age: aaa = Person.age(Persen.year, Persen.bithdeyCount),
} = Persen
console.log(
  `Деструктивизация Persen в  переменные name,sername,age
const {firstName:name, lastName:sername, age}=Persen :`,
  name + ' ' + sername + ' ' + aaa
)
