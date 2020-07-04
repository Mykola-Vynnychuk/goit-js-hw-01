const buttonTuskFour = document.getElementById("tusk-four");
buttonTuskFour.addEventListener("click", () => {
  let credits = 23580;
  const pricePerDroid = 3000;

  let numberOfDroid = prompt("Скільки дроїдів бажаєте придбати?");
  let message;
  if (numberOfDroid === null) {
    message = "Скасовано користувачем!";
  } else {
    numberOfDroid = Math.trunc(+numberOfDroid);
    if (Number.isNaN(numberOfDroid)) {
      message = "Скасовано. Введене значення не є числом!";
    } else if (numberOfDroid < 0) {
      message = "Скасовано. Ми не купуємо дроїди, а продаємо ;)";
    } else {
      const totalPrice = pricePerDroid * numberOfDroid;
      if (totalPrice > credits) {
        message = "Недостатньо коштів на рахунку!";
      } else {
        credits -= totalPrice;
        message = `Ви купили ${numberOfDroid} дроїдів, на рахунку залишилося ${credits} кредитів.`;
      }
    }
  }
  console.log(message);
});
