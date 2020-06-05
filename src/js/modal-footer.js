// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const license = document.querySelector('.license');
const btnLicense = document.querySelectorAll('.js-license-toggle');
const body = document.querySelector('body');

// ---------- show license start ----------
btnLicense.forEach((items) => {
  items.addEventListener('click', () => {
    license.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show license end ----------
