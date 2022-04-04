import './style.css'

import { Application, Controller } from '@hotwired/stimulus'

const application = Application.start()

application.register('usersnap', class extends Controller {
  initialize() {
    console.log("initialize")
    console.log("Usersnap in initialize", window.Usersnap)
  }

  connect() {
    console.log("connect")
  }
})
