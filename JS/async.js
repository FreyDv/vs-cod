// const timOut = setTimeout(()=>{
//   clearTimeout(timOut)
//   console.log('After Timeout:'+ '2')
// },2000)

// const interval = setInterval(()=>{
//   clearTimeout(timOut)
//   console.log('After interval:'+ '2')
// },2000)

// const deley = (colbeck,weit=1000)=>{
//   setTimeout(colbeck,weit)
// }

// deley(()=>{
//   console.log('deley:','1500')
// },1500)
const deley = (weit = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      // reject('Somseng wrong')
    },weit)
  })
  return promise
}

// deley(1000)
// .then(()=>{
//   console.log('After 2 seconds:')
// })
// .catch(err => console.error('Error',err))
// .finally(()=>{
//   console.log('Final')
// }); 

const getData = () => new Promise(resolve=>resolve([
  1,2,3,4,5,6,7,8,9
]))
getData().then(x=>console.log(x))

async function asyncExample(){
  await deley(3000)
  const data = await getData()
  console.log('DATA:',data)
}

asyncExample(1000)