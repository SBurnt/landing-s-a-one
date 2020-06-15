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

const footer = document.querySelector('.footer');
const btnOpenFooter = document.querySelectorAll('.js-footer-open-toggle');

const license = document.querySelector('.license');
const btnLicense = document.querySelectorAll('.js-license-toggle');

const information = document.querySelector('.information');
const btnInformation = document.querySelectorAll('.js-information-toggle');

const body = document.querySelector('body');

// ---------- show footer start ----------
btnOpenFooter.forEach((items) => {
  items.addEventListener('click', () => {
    footer.classList.toggle('active');
  });
});
// ---------- show footer end ----------

// ---------- show license start ----------
btnLicense.forEach((items) => {
  items.addEventListener('click', () => {
    license.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show license end ----------

// ---------- show information start ----------
btnInformation.forEach((items) => {
  items.addEventListener('click', () => {
    information.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show information end ----------
