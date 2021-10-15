/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="container">
        <h4>Kemangi resto</h4>
        <p>Copyright © 2021 irfan-fauzi</p>
      </div>
    </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
