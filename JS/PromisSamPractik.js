// console.log('Start')
// setTimeout(() => console.log('setTimeout'), 1000)

// window.setTimeout(function () {
//   console.log('Insid Timout afte 2 sec')
// }, 2000)
// console.log('end')

// setInterval(function () {
//   console.clear()
// }, 3000)

function testPromis() {
  return new Promise(function (resolve, reject) {
    let result = prompt('В коком году была ВОВ?', 'Укажи год...')
    if (result == undefined || result == 'Укажи год...' || NaN) {
      let err = new Error()
      err.code = '0x0f'
      err.message = 'Не верный ввод Обнови страницу попробуй еще раз:'
      reject(err)
    } else if (result) {
      resolve(result)
    }
  })
}
testPromis().then(
  (result) => {
    if (result == '1941') alert('Вернно!')
    else alert('Очень жаль Вы ощиблись!')
  },
  (err) => {
    for (keys in err) {
      console.log(keys + ': ' + err[keys])
      alert(keys + ': ' + err[keys])
    }
  }
)
