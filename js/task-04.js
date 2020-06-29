let credits = 23580;
const pricePerDroid = 3000;

const numberOfDroid = prompt("Скільки дроїдів бажаєте придбати?");

if (numberOfDroid === null) {
  console.log("Скасовано користувачем!");
} else if (numberOfDroid * pricePerDroid > credits) {
  console.log("Недостатньо коштів на рахунку!");
} else {
  credits -= numberOfDroid * pricePerDroid;
  console.log(
    `Ви купили ${numberOfDroid} дроїдів, на рахунку залишилося ${credits} кредитів.`
  );
}

// Вияснити чи теба перетворювати змінну numberOfDroids в число?
