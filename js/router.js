export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    switch (pathname) {
      case "/":
        document.querySelector("body").style.backgroundImage =
          'url("./assets/bg1.png")'
        break
      case "/explorer":
        document.querySelector("body").style.backgroundImage =
          'url("./assets/bg3.png")'
        break
      case "/universe":
        document.querySelector("body").style.backgroundImage =
          'url("./assets/bg2.png")'
        break
    }
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  }
}
