const buttonTaskTwo = document.getElementById('task-two');
buttonTaskTwo.addEventListener('click', () => {
  const total = 100;
  const ordered = +document.querySelector('[name=ordered]:checked').value;

  let message =
    total < ordered
      ? 'На складі недостатньо товарів!'
      : "Замовлення оформлено, з Вами зв'яжеться менеджер";

  console.log(message);
});
