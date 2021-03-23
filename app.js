function x(node) {
  xa = document.getElementById(node)
  console.log(xa.tagName.toLowerCase() + ': ', xa.textContent)
  return xa
}
const title = x('title')
const h1 = x('h1')
const h2 = x('h2')
const h3 = x('h3')
const h4 = x('h4')
////квери селектор возврашаетт первый попавшийся подходящий елемент
////<h2 id="h2" class="h2-class">Лера не меша пожалуйста</h2>
// const h21 = document.querySelector('h2') //поиск по тег найму
// const h22 = document.querySelector('.h2-class')//черз точку поиск по класу
// const h23 = document.querySelector('#h2')//черз # поиск по класу id
// console.log(h21.tagName+': ',h21.textContent)
// console.log(h22.tagName+': ',h22.textContent)
// console.log(h23.tagName+': ',h23.textContent)
////////////////////////////////////////////////////////////////
// h1.textContent = 'Text cheng from js cod'
// h1.style.color = 'red'
// h1.style.textAlign = 'center'
// h1.style.backgroundColor = 'black'
// h1.style.padding='2rem'

var y = 1
function node(n) {
  n.textContent = 'Text cheng from js cod' + y++
  n.style.color = 'red'
  n.style.textAlign = 'center'
  n.style.backgroundColor = 'black'
  n.style.padding = '2rem'
}

node(h1)
node(h2)
node(h3)
node(h4)

//5:13:44 просмотр видео
