/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import './resto-item.js';

class RestoList extends HTMLElement {
  set dataResto(data) {
    // eslint-disable-next-line no-underscore-dangle
    this._dataResto = data;
    this.render();
  }

  set renderError(messege) {
    // eslint-disable-next-line no-underscore-dangle
    this._messege = messege;
    this.innerHTML = `
    <h2 class="renderEror">${this._message}</h2>
    `;
  }

  render() {
    this.innerHTML = '';
    this._dataResto.forEach((item) => {
      const restoItem = document.createElement('resto-item');
      this.appendChild(restoItem);
      restoItem.dataResto = item;
    });
  }
}

customElements.define('resto-list', RestoList);
