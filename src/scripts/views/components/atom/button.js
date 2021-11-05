class Button extends HTMLElement {
  set title(val) {
    this._title = val
    this.render()
  }

  set event(val) {
    this._event = val
    this.render()
  }

  set style(val) {
    this._style = val
    this.render()
  }

  render() {
    this.innerHTML = `
    <button class=${this._style}>${this._title}</button>
    `
    this.querySelector('button').addEventListener('click', this._event)
  }
}

customElements.define('app-btn', Button)
