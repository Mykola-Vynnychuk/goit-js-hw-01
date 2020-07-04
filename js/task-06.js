const buttonTuskSix = document.getElementById("tusk-six");
buttonTuskSix.addEventListener("click", () => {
let total = 0;

while (true) {
  let userNumber = prompt("Введіть число");

  if (userNumber === null) {
    console.log("Відмінено користувачем!");
    break;
  }

  userNumber = Number(userNumber);

  const notANumber = Number.isNaN(userNumber);

  if (notANumber) {
    console.log("Введено не число. Ітерацію пропущено!");
    continue;
  }

  total += userNumber;
}

alert(`Загальна сума введених чисел ${total}`);
});

