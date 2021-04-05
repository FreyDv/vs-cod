// // console.log('Start')
// // setTimeout(() => console.log('setTimeout'), 1000)

// // window.setTimeout(function () {
// //   console.log('Insid Timout afte 2 sec')
// // }, 2000)
// // console.log('end')

// // setInterval(function () {
// //   console.clear()
// // }, 3000)

// console.log('Request Data:',)

// setTimeout(function () {
//   console.log('Prepering Data:')
//   const BeckEndData ={
//     server:'avs',
//     port:'80',
//     status:'Working',
//   }

//   setTimeout(function () {
//     BeckEndData.modifid = true
//       console.log('DataRecived:',BeckEndData)
//   },2000)
// },2000)

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Prepering Data:')
    const BeckEndData = {
      server: 'avs',
      port: '80',
      status: 'Working',
    }
    resolve(BeckEndData)
  }, 150)
})
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modifid = false
        resolve(data)
      }, 250)
    })
  })
  .then((Clientdata) => {
    console.log('DataResiv:', Clientdata)
  })
  .catch((err) => console.error('Error', err))
  .finally(() => {
    console.log('Finely:')
  })

//так гомостко
// p.then((data) => {
//   const p2 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//       data.modifid= true
//       console.log('Promis resolved')
//       console.log(data)
//     }, 2000);

//   })

// })

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  }).then(inff)
function inff(mss) {
  return console.log('After', (mss / 1000).toFixed(1), 'seconds')
}
// sleep(2500)
// sleep(3000)
// sleep(3500)

Promise.all([sleep(2500),sleep(3000),sleep(3500)]).then(()=>{
  console.log('Oll Promises finaly')
})

Promise.race([sleep(3500),sleep(2500),sleep(3000)]).then(()=>{
  console.log('First Promis')
})