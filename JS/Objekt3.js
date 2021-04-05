let person = Object.create(
  {
    culculateAge() {
      console.log('fAge:', new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'Daniil',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1998,
      enumerable: false,
      writebel: false,
      configurable: false,
    },
    age: {
      enumerable: true,
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.backgroundColor = 'red'
        console.log('Set age: ', value)
      },
    },
  }
)
console.log(':', person)
person.name = 'Maksim'
person.birthYear = 2000
delete person.name
delete person.birthYear
person.age = 'dwd'
for (let key in person) {
  if(person.hasOwnProperty(key)) 
  console.log(key + ': ' + person[key])
}
person.culculateAge()
