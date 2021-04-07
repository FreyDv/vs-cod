// function Clock({ template }) {
//   let timer

//   function render() {
//     let date = new Date()

//     let hours = date.getHours()
//     if (hours < 10) hours = '0' + hours

//     let mins = date.getMinutes()
//     if (mins < 10) mins = '0' + mins

//     let secs = date.getSeconds()
//     if (secs < 10) secs = '0' + secs

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs)

//     console.log(output)
//   }

//   this.stop = function () {
//     clearInterval(timer)
//   }

//   this.start = function () {
//     render()
//     timer = setInterval(render, 1000)
//   }
// }

// let clock = new Clock({ template: 'h:m:s' })
// clock.start()

// setTimeout(() => console.clear(), 10000)

class Clock {
  #timer = 0

  constructor(op) {
    this.template = op.template
    this.interval = op.interval
  }

  render() {
    let date = new Date()
    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    let seconds = date.getSeconds()
    if (seconds < 10) seconds = '0' + seconds

    let ms = date.getMilliseconds()
    if (ms < 100 || ms < 10) ms = '0' + ms
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', seconds)
      .replace('ms', ms)

    console.log(output)
  }

  start() {
    this.render()
    this.#timer = setInterval(() => this.render(), this.interval)
  }
  stop() {
    clearInterval(this.#timer)
  }
}
clock1 = new Clock({ template: 'h:m:s:ms', interval: 1000 })
clock1.start()

clock2 = new Clock({ template: 'm:s:ms', interval: 1000 })
clock2.start()
clock1.stop()
// setInterval(() => console.clear(), 10000)
