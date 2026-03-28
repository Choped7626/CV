const btnTheme = document.getElementById('btn-theme');
const icon = btnTheme.querySelector('.material-symbols-outlined');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  icon.textContent = document.body.classList.contains('light')
    ? 'dark_mode'
    : 'light_mode';
});

document.getElementById('export-btn').addEventListener('click', () => {
  window.print();
});
