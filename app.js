class Animal {
  constructor(opt) {
    this.name = opt.name
    this.spead = 0
  }
  run(spead) {
    this.spead = spead
    console.log(this.name + ', run with speed:', this.spead)
  }
  stop() {
    console.log(this.name + ' stop from: ', this.spead + ' to 0')
    this.spead = 0
  }
}

class Rebit extends Animal {
  constructor(opt) {
    super(opt)
    this.name = opt.name
    this.earLength = opt.earLength
  }

  hide() {
    if (this.spead) {
      console.log(this.name + ' cant hide cose still running!')
    } else {
      console.log(this.name + ' sceard and he hide in hool in tre:')
    }
  }
  stop() {
    let x = 1000
    setTimeout(() => {
      super.stop()
      console.log('After: ', x / 1000 + ' seconds')
      this.hide()
    }, x)
  }
}

animal = new Animal({ name: 'Animal' })
console.log('animal.name:', animal.name)
console.log('animal.name:', animal.spead)
animal.run(5)
console.log('animal.spead:', animal.spead)
animal.stop()
console.log('animal.spead:', animal.spead)
animal.earLength = 2
console.log('animal.earLength:', animal.earLength)

rebit = new Rebit({ name: 'Rebit', earLength: 3 })
console.log('rebit.name:', rebit.name)
console.log('rebit.spead:', rebit.spead)
rebit.run(6)
console.log('rebit.spead:', rebit.spead)
rebit.hide()
rebit.stop()
console.log('rebit.earLength:', rebit.earLength)

// https://learn.javascript.ru/class-inheritance
// функция генератор
function* vf(i) {
  yield i++
  console.log('yield1:', i)
  yield i++
  console.log('yield2:', i)
  yield i++
  console.log('yield3:', i)
}

let cv = vf(4)

console.log('cv.next1():', cv.next().value)
console.log('cv.next2():', cv.next().value)
console.log('cv.next3():', cv.next().value)
console.log('cv.next4():', cv.next().value)
