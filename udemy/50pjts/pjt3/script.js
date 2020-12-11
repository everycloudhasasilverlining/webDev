const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');
const container = document.querySelector('.container');

console.log(btnOpen);
console.log(btnClose);
console.log(container);

btnOpen.addEventListener('click', () => {container.classList.add('show-nav')})
btnClose.addEventListener('click', () => {container.classList.remove('show-nav')});
