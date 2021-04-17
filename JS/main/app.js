const p = {
  name: 'Daniil',
  adg: 23,
  job: 'inginer',
}

var hendler = {
  get: function (target, prop) {
    return prop in target ? target[prop] : 32
  },
  set: function (target, prop) {
    return prop in target ? target[prop] : console.log(`${prop} не сушествует`)
  },
}
const pp = p
const op = new Proxy(p, hendler)
op.adg = 5

console.log(':', op.adg)
