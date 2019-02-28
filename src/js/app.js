import square from './square';

const squareText = document.querySelector('#square');
squareText.innerHTML = square(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

console.warn('Hello world, this is Parcel!');