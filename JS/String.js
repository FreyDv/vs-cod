var str = 'Daniil Frey now stading js'

str = str.toUpperCase()
console.log('str.toUpperCase:', str)

str = 'Daniil Frey now stading js'
str = str.toLocaleUpperCase()
console.log('str.toLocaleUpperCase():', str)

str = 'Daniil Frey now stading js'
str = str.toLowerCase()
console.log('str.toLowerCase():', str)

str = 'Daniil Frey now stading js'
str = str.toLocaleLowerCase()
console.log('str.toLocaleLowerCase():', str)

str = 'Daniil Frey now stading js'
str = str.lastIndexOf('i')
console.log('str.lastIndexOf(i):', str)

str = 'Daniil Frey now stading js'
str = str.includes('js')
console.log('str.includes(js):', str)

str = 'Daniil Frey now stading js'
str = str.length
console.log('str.length:', str)

str = 'Daniil Frey now stading js'
str = str.charAt(24)
console.log('str.charAt(24):', str)

str = 'Daniil Frey now stading js'
str = str.match('js')
console.log('str.match(js):', str)

str = 'Daniil Frey now stading js'
str = str.charCodeAt(24)
console.log('str.charCodeAt(24) // unicod:', str)

str = 'Daniil Frey now stading js'
str = str.repeat(2)
console.log('str.repeat(2) :', str)

str = 'Daniil Frey now stading js'
str = str.replace('js', 'c#')
console.log('str.replace(js,c#) :', str)

str = 'Daniil Frey now stading js'
str = str.search('now')
console.log('str.search(now) :', str)

str = 'Daniil Frey now stading js'
str = str.slice(24, 26)
console.log('str = str.slice(24,26) :', str)

str = 'Daniil Frey now stading js'
str = str.split(' ')
console.log('str = str.split(пробел) :', str)

str = 'Daniil Frey now stading js'
str = str.startsWith('Daniil')
console.log('str.startsWith(Daniil) :', str)

str = 'Daniil Frey now stading js'
str = str.substr(7, 4)
console.log('str.substr(7,4) :', str)

str = '               Daniil Frey now stading js'
str = str.trim()
console.log('str =                Daniil Frey now stading js:', str)
console.log('str.startsWith(Daniil) :', str)

function logPerson(s, name, age) {
  console.log(s, name, age)
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
var personNAme = `Daniil`
var PersonAdge = 23
var otput = logPerson` Имя: ${personNAme}, возраст: ${PersonAdge}!`
console.log(otput)
