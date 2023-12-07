const h1Element = document.querySelector('h1')
console.log(h1Element);
console.dir(h1Element);
h1Element.textContent = '変更後';

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', (e) => {
  console.log('hello');
  console.log(e.target);
  console.log(e.target.textContent);
})
