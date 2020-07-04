const buttonTuskFive = document.getElementById("tusk-five");
buttonTuskFive.addEventListener("click", () => {
  let deliveryToCountry = prompt("В яку країну доставити товар?").toLowerCase();
  let cost;

  switch (deliveryToCountry) {
    case "китай":
    case "rbnfq":
      cost = 100;
      deliveryToCountry = "Китай";
      break;

    case "чилі":
    case "xbks":
    case "чили":
    case "xbkb":
      cost = 250;
      deliveryToCountry = "Чилі";
      break;

    case "австралія":
    case "fdcnhfksz":
    case "австралия":
    case "fdcnhfkbz":
      cost = 170;
      deliveryToCountry = "Австралію";
      break;

    case "індія":
    case "sylsz":
    case "индия":
    case "bylbz":
      cost = 80;
      deliveryToCountry = "Індію";
      break;

    case "ямайка":
    case "zvfqrf":
      cost = 120;
      deliveryToCountry = "Ямайку";
      break;

    default:
      cost = "not available";
      break;
  }

  cost === "not available"
    ? alert("У вашій країні доставка недоступна")
    : alert(`Доставка в ${deliveryToCountry} буде коштувати ${cost} кредитів`);
});
