function delay(ms){
  return new Promise(r=>setTimeout(()=>r(),ms))
}

 const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos(){
//   console.log('Feth started:')
//   return delay(1000)
//   .then(()=>fetch(url))
//   .then(response =>response.json())
// }

// fetchTodos()
// .then(data=>{
//   console.log('Data:',data)
  
// }).catch(e=>console.error(e))


async function fetchAsyncAweyt(){
  try{
  await delay(2000)
  let response =await fetch(url)
  let data = await response.json()
  console.log(data)
  }
  catch(e){
    console.error(e)
  }
  finally{
    console.log('Get it:')
  }
}

fetchAsyncAweyt()



