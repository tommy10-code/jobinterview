import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["overlay", "panel"]

  connect() {
    this.onDocClick = (e) => {
      const clickedInside = this.panelTarget.contains(e.target)
      if (!clickedInside) {
        this.close()
      }
    }

    this.onEsc = (e) => {
      if ( (e.key) === "Escape") {
        this.close()
      }
    }
  }

  open(e) {
    if (e) {
      e.stopPropagation()
    }

    this.overlayTarget.classList.remove("hidden")
    this.panelTarget.classList.remove("hidden")

    document.addEventListener("click", this.onDocClick)
    document.addEventListener("keydown", this.onEsc)
  }

  close(e){
    if (e) {
      e.stopPropagation()
    }

    this.overlayTarget.classList.add("hidden")
    this.panelTarget.classList.add("hidden")

    document.removeEventListener("click", this.onDocClick)
    document.removeEventListener("keydown", this.onEsc)
  }
}
