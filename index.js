function greet(sneme) {
  var name = 'Tana'
  let age = 15
  return name + ' ' + sneme + ' ' + age + ' e.o. live in  '
}
s2 = greet('Chernova')
console.dir(greet) // info about function

let counter = 0
i1 = setInterval(function () {
  console.log(':', counter++)
  if (counter == 1) clearInterval(i1)
}, 1000)

//Ctrelochnie funcii

const arrow = (name) => {
  console.log('hi:', name)
}
arrow('Daniil')

arrow2 = (name) => console.log('name:', name)
arrow2('Valeria')

const pow2 = (num) => num ** 2

console.log('pow2(5):', pow2(5))

//Параметры по умолчанию
let sum = (a, b = 1) => a + b
console.log('sum = (a, b = 1) => a + b; sum(41):', sum(41))

function sumx(...all) {
  let resul = 0
  for (let num of all) {
    resul += num
  }
  return resul
}
var x = sumx(1, 5, 7, 5, 4, 1, 3, 5, 4, 4, -85, 56, 8, 4, 4, 5, 10)
console.log(x)

//Замыкание

function createMeber(name) {
  return var xf = (sNeame)=> {
    console.log(name +' ' +sNeame)
  }
}

const LogWithLastName = createMeber('Даниил')
console.log(LogWithLastName('Frey'))
console.log(LogWithLastName('Malinina'))


//test
//mist
//pist

