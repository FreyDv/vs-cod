//function clculateAdg(yer){
//return 2020-yer
//}
//
//infoAbaut('Елена',1998)
//
//function infoAbaut(name,adg){
//  console.log('Человек '+name+' сейчас имеет возраст '+clculateAdg(adg)+' года.')
//}

const cars = ['Mazda', 'Mersedes', 'Reno']
console.log(cars)
const carss = new Array('Mazda', 'Mersedes', 'ford')
console.log(carss[0])

console.log(carss.length)
carss[0] = 'Porhe'
console.log(carss[0])

carss[carss.length] = 'BMW'
console.log(carss)

for (car of carss) {
  console.log(car)
}
const Persen ={
  firstName ='Daniil',
  lastName = 'Frey',
  year ='1998',
  languges =['Ru','En', 'Ua'],
  isMeris=true,
  greet=function() {
     console.log('greet');
  }
}
  