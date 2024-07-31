'use strict';
import iziToast from 'izitoast';

const form = document.querySelector('form');

const makePromise = (delay, value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();
  makePromise(form.elements.delay.value, form.elements.state.value)
    .then(resolve => {
      iziToast.show({
        title: 'OK',
        titleColor: '#ffffff',
        message: resolve,
        messageColor: '#ffffff',
        color: '#59a10d',
        position: 'topRight',
        displayMode: 1,
        iconUrl: './img/ok.svg',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        titleColor: '#ffffff',
        message: error,
        messageColor: '#ffffff',
        color: '#EF4040',
        position: 'topRight',
        displayMode: 1,
        iconUrl: './img/x.svg',
      });
    });
  form.reset();
});
