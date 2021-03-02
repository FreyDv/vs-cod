var mas = ['BMW', 'Ford', 'Mazda', 'Mersedes']
console.log('mas:', mas)

mas.push('Reno')
console.log('После метода mas.push(Reno):', mas)

mas.unshift('Volga')
console.log('После метода mas.unshift(Volga):', mas)

console.log('mas.shift():', mas.shift())
console.log('После метода mas.shift():', mas)

console.log('mas.shift():', mas.pop())
console.log('После метода mas.pop():', mas)

console.log('После метода mas.reverse():', mas)

const text = 'hi we stady js'

const people = [
  { namex: 'Danii', budget: 15000 },
  { namex: 'Lera', budget: 0 },
  { namex: 'Babushka', budget: 16000 },
]

var index = mas.indexOf('BMW')
const reverseText = text.split(' ').reverse().join(' ')
console.log('После метода text.split( ):', mas)

console.log('mas.indexOf(BMW):', index)
mas[index] = 'Porhe'
console.log('reverseText:', reverseText)

var indix = people.findIndex(function (person) {
  return person.budget === 15000
})
console.log('People[index]:', people[indix])

var indix2 = people.find(function (person) {
  return person.namex === 'Lera'
})
console.log('people.find(function(person):', indix2)

const persen = people.find((persen) => persen.budget == 16000)
console.log('persen:', persen)

console.log(mas.includes('Ford'))

uperCaseMas = mas.map((mas) => mas.toUpperCase())
console.log('mas.map(mas=>mas.toUpperCase):', uperCaseMas)
