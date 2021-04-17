// class El {
//   constructor(el, mas) {
//     this.el = document.querySelector('.gg')
//     this.mas = mas
//   }

//   _setColor(el) {
//     let colour = this.mas[Math.floor(Math.random() * this.mas.length)]
//     el.style.background = colour
//     el.style.boxShadow = `0 0 15px ${colour}`
//   }
//   _removeColor(el) {
//     el.style.background = '#2d2d2d'
//     el.style.boxShadow = `0 0 4px #000`
//   }
//   makeBlok(kolovo) {
//     do {
//       let blok = document.createElement('div')
//       blok.classList.add('ggw')
//       addEventListener('mouseover', () => this._setColor(blok))
//       addEventListener('mouseout', () => this._removeColor(blok))
//       this.el.appendChild(blok)
//       console.log('kolovo:', kolovo)
//       kolovo -= 1
//     } while (kolovo)
//   }
// }
// const mas = [
//   '#ed220d',
//   '#b542e5',
//   '#0d93ed',
//   '#f2770b',
//   '#8affbc',
//   '#f2ff8a',
//   '#ff38c2',
//   '#e37f35',
// ]
// const el = new El('gg', mas)
// for (let i = 0; i < 2000; i++) {
//   new El('gg', mas).makeBlok(1)
// }

// let el = document.querySelector('.gg')
//console.log('1-el:',el)
// let blok = document.createElement('div')
//console.log('2-blok:',blok)
// blok.classList.add('ggw')
//console.log('3-blok:',blok)
// addEventListener('mouseover', () => setColor(blok))
// addEventListener('mouseout', () => removeColor(blok))
//  console.log('el',el)
// el.appendChild(blok)
//  console.log('4-blok',blok)
//  console.log('el',el)
// document.querySelector('.gg').appendChild(document.createElement('div'))
//  console.log('4',document.querySelector('.gg').appendChild(document.createElement('div')))

// setColor = (el) => {
//   let colour = mas[Math.floor(Math.random() * mas.length)]
//   el.style.background = colour
//   el.style.boxShadow = `0 0 12px ${colour}`
// }
// removeColor = (el) => {
//   el.style.background = '#2d2d2d'
//   el.style.boxShadow = `0 0 4px #000`
// }

//https://html-plus.in.ua/sozdanie-html-yelementov-v-javascript/

const el = document.querySelector('.gg')
const squareColors = [
  '#ed220d',
  '#b542e5',
  '#0d93ed',
  '#f2770b',
  '#8affbc',
  '#f2ff8a',
  '#ff38c2',
  '#e37f35',
]
const BLOCKS = 679

for (let i = 0; i < BLOCKS; i++) {
  const blok = document.createElement('div')
  blok.classList.add('ggw')
  blok.addEventListener('mouseover', () => setColor(blok))
  blok.addEventListener('mouseout', () => removeColor(blok))
  el.appendChild(blok)
}
function setColor(elem) {
  const color = getRandomColor()
  elem.style.background = color
  elem.style.boxShadow = `0 0 12px ${color}`
}
function removeColor(elem) {
  elem.style.background = '#2d2d2d'
  elem.style.boxShadow = '0 0 4px #000'
}

const getRandomColor = () =>
  squareColors[Math.floor(Math.random() * squareColors.length)]

  
