const buttonTaskThree = document.getElementById('task-three');
buttonTaskThree.addEventListener('click', () => {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  const adminInput = prompt('Введіть пароль');

  if (adminInput === null) {
    message = 'Скасовано користувачем!';
  } else if (adminInput === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
  } else {
    message = 'Доступ заборонений, невірний пароль!';
  }

  console.log(message);
});
