console.log('Start')
setTimeout(() => console.log('setTimeout'), 1000)

window.setTimeout(function () {
  console.log('Insid Timout afte 2 sec')
}, 2000)
console.log('end')

setInterval(function () {
  console.clear()
}, 3000)
