function createCalculatorNom(n){
  return function(){
    console.log('n*10:',10*n) 
  }
}

// const calc42 = createCalculatorNom(42)
// calc42()
// const calc12 = createCalculatorNom(12)
// calc12()

function createcalculator2Nom(znak){
  return function(n1,n2){
    console.log(n1+' '+znak+' '+n2+' = '+eval(new String(n1+znak.toString()+n2).toString())) 
    return eval(new String(n1+znak.toString()+n2).toString())
  }
}

const sum = createcalculator2Nom('+')
const sub = createcalculator2Nom('-')
const div = createcalculator2Nom('/')
const mul = createcalculator2Nom('*')
sum(41,42)
sub(41,42)
div(42,2)
mul(21,2)

function createHTTPlink (domein){
     return function (url){
       console.log(`https://${url}.${domein}`)
     }
}

const linkCom = createHTTPlink('com')
linkCom('google') 
linkCom('facebook')

