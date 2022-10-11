const btnCopy = document.querySelector('.btn-copy');
const txtCopy = document.querySelector('.link');

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(txtCopy.innerText);
});

