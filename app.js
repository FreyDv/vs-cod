function LogPerson() {
  let x = this
  let keys = Object.keys(x)
  console.group('info about ' + this[keys[0]])
  console.log(keys[1] + ' :', x[keys[1]])
  console.log(keys[2] + ' :', x[keys[2]])
  console.log(keys[3] + ' :', x[keys[3]])
  console.log(keys[4] + ' :', x[keys[4]])
  console.groupEnd()
}

person = { name: 'Daniil', sname: 'Frey', age: 23, job: 'inginir' }
// let keys1=Object.keys(person)
// console.log(':',person[keys1[0]])

LogPerson.bind(person)()
