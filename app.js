function Hello () {
  console.log('Hello',this)
}

const person = {
 name:'Daniil',
 age:'23',
 seyHollow: Hello,
 seyHollowWindow: Hello.bind(this),

}

console.log('ПНХ:',Hello)