function Hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Daniil',
  age: '23',

  seyHollow: Hello,
  seyHollowWindow: Hello.bind(this),
  info: function (job) {
    console.group('Opana')
    console.log(
      `Name is ${this.name} and age is ${this.age} but she werkit ${job}`
    )
    console.groupEnd()
  },
}

const lena = {
  name: 'lena',
  age: 22,
}

Array.prototype.Div = function (i) {
  return this.map((xc) => xc * i)
}

// person.map().forEach((key)=>{console.log(`${key}: ${this.key}`)})

// for (let key in person) {
//   let x = person.hasOwnProperty( key )
//   if ( x && 'function'!==typeof(person[key]) ) console.log(`${key}: ${person[key]}`)
  
// }

Object.prototype.clo= function (){
  console.group(this['name'])
  for (let key in this) {
    let x = this.hasOwnProperty( key )
    if ( x && 'function'!==typeof(this[key]) ){
      
      console.log(`${key}: ${this[key]}`)
      
    } 
  }
  console.groupEnd()
}
person.clo();

// var arr = [34,54,23,65,767,89,0,2,4,45]
// console.log(arr.Div(3))
// lena.info()

// person.info()
// lena['name']='Lena'
// lena['age']=22
// person.info.bind(lena,'medsistra')()

// let namee = prompt('Как тебя зовут?')
// alert('Привет ' + namee)

// function x(node) {
//   xa = document.getElementById(node)
//   console.log(xa.tagName.toLowerCase() + ': ', xa.textContent)
//   return xa
// }

// const h1 = x('h1')
// const h2 = x('h2')
// const h3 = x('h3')
// const h4 = x('h4')

// h1.textContent=`${namee} как здорово что ты написала свое имя!`
// h2.textContent=`На самом деле имя ${namee} очень крутое!`

// h1.visibility=true
// h2.visibility=true

// function bind(context,fn) {
//   return function(... args){
//      fn.apply(context,args)
//   }
// }

// bind(person,lo)


