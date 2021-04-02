function LogPerson() {
  let x = this
  let keys = Object.keys(x)
  console.group('info about ' + this[keys[0]])
  console.log(keys[1] + ' :', x[keys[1]])
  console.log(keys[2] + ' :', x[keys[2]])
  console.log(keys[3] + ' :', x[keys[3]])
  
  console.groupEnd()
}

person1 = { name: 'Daniil', sname: 'Frey', age: 23, job: 'inginir' }
person2 = { name: 'Lera', sname: 'Malinina', age: 22, job: 'student' }
// let keys1=Object.keys(person)
// console.log(':',person[keys1[0]])

// LogPerson.bind(person1)()

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

bind(person1, LogPerson)()
bind(person2, LogPerson)()

