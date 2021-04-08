class El {
  constructor(el, mas) {
    this.el = document.querySelector('.gg')
    this.mas = mas
  }

  _setColor(el) {
    let colour = this.mas[Math.floor(Math.random() * this.mas.length)]
    el.style.background = colour
    el.style.boxShadow = `0 0 15px ${colour}`
  }
  _removeColor(el) {
    el.style.background = '#2d2d2d'
    el.style.boxShadow = `0 0 4px #000`
  }
  makeBlok(kolovo) {
    do {
      let blok = document.createElement('div')
      blok.classList.add('ggw')
      addEventListener('mouseover', () => this._setColor(blok))
      addEventListener('mouseout', () => this._removeColor(blok))
      this.el.appendChild(blok)
      console.log('kolovo:', kolovo)
      kolovo -= 1
    } while (kolovo)
  }
}
const mas = [
  '#ed220d',
  '#b542e5',
  '#0d93ed',
  '#f2770b',
  '#8affbc',
  '#f2ff8a',
  '#ff38c2',
  '#e37f35',
]
const el = new El('gg', mas)
for (let i = 0; i < 2000; i++) {
  new El('gg', mas).makeBlok(1)
}

console.log('я должен работать:')

//https://html-plus.in.ua/sozdanie-html-yelementov-v-javascript/
