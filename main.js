import './style.css'

import { Application, Controller } from '@hotwired/stimulus'

const application = Application.start()

application.register('usersnap', class extends Controller {

  connect() {
    console.log("data", this.data.get("controller"))
  }

  open() {
    console.log("open", window.Usersnap)
    window.Usersnap.logEvent('open');
  }
})
