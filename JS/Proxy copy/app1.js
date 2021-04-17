const person = {
  name: 'Daniil',
  age: 23,
  job: 'inginer',
}
const op = new Proxy(person, {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else console.log('Sorry we dont haw prop:', prop)
  },
  has(target, p) {
    return ['name', 'age', 'job'].includes(p)
  },
  deleteProperty(target, prop) {
    console.log('delytyng ' + prop)
    delete target[prop]
    return true
  },
})
// op.age = 5
// op.sname = 'Frey'
// console.log('op.age: ', op.age)
// console.log('op.name: ', op.name)
// console.log('op.sing:',op.sing)
// console.log('name'in op)
// console.log('age2' in op)
// delete(op.name)
// console.log(op)
let x = 1
const log = (text) => {
  console.log(`Log${x}: ${text}`)
  x++
}
const of = new Proxy(log, {})

log('Daniil')
log('frey')
log('sutulii')
