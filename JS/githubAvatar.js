function httpGet(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response)
      } else {
        var error = new Error(this.statusText)
        error.code = this.status
        reject(error)
      }
    }

    xhr.onerror = function () {
      reject(new Error('Network Error'))
    }

    xhr.send()
  })
}

// сделать запрос
httpGet('/user.json')
  // 1. Получить данные о пользователе в JSON и передать дальше
  .then((response) => {
    console.log(response)
    let user = JSON.parse(response)
    console.log('user:', user)
    return user
  })
  // 2. Получить информацию с github
  .then((user) => {
    console.log(user)
    return httpGet(`https://api.github.com/users/${user.name}`)
  })
  // 3. Вывести аватар на 3 секунды (можно с анимацией)
  .then((githubUser) => {
    console.log(githubUser)
    githubUser = JSON.parse(githubUser)

    let nameTeg = document.createElement('h1')
    nameTeg.textContent = githubUser.login
    document.body.appendChild(nameTeg)

    let img = new Image()
    img.src = githubUser.avatar_url
    img.className = 'promise-avatar-example'
    document.body.appendChild(img)

    setTimeout(() => {
      img.remove()
      nameTeg.remove()

    }, 10000) // (*)
  })
