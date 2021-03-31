let pers = {
  fname: 'Daniil',
  sname: 'Frey',
  age: 23,
  number: '0992239852',

  // info(){
  //   console.info(`Inforamcia about person who name is ${this.fname}`)
  // }
}

// pers.info()

// console.log(pers)

for (let key in pers) {
  if (pers.hasOwnProperty(key)){
    console.log('key: ', key + ' value: ' + pers[key])
  } 
}

// Object.keys(pers).forEach((ik)=>{
//   console.log(ik + ': ' + pers[ik])
// })

const logger={
  keys(msg){
    console.log('---------------------------------------------------------------------------')
    console.log('keys from '+msg+':')
    console.log('Object have next Keys: ',Object.keys(this))
  },
  keysAndValue(msg){
    console.log('---------------------------------------------------------------------------')
    console.log('это keysAndValue from '+msg+':')
    Object.keys(this).forEach((key)=>{
      console.log(key+': '+ this[key])
    })
  },
  showWithParams(msg,top = false,mid =false,end=false){
    console.log('---------------------------------------------------------------------------')
    console.log('это showWithParams from '+msg+':')
    if(top)console.log('--==Star==--')
    Object.keys(this).forEach((key,x,y)=>{
      console.log(key+': '+ this[key])
      if(mid&&x!==y.length-1)console.log('------------')
    })
    if(end)console.log('--==Finish==--') 
  }
}


let b1 = logger.keys.bind(pers,'b1')
let b2 = logger.keysAndValue.bind(pers,'b2')
let b3 = logger.showWithParams.bind(pers,'b3',true,true,true)
// logger.keys(pers)
b1()
b2()
// logger.keysAndValue('call').call(pers)
b3()