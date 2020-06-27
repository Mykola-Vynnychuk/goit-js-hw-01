const deliveryToCountry = prompt ('В яку країну доставити товар?');
let cost;

switch (deliveryToCountry) {
  case 'китай':
    cost = 100;
    alert (`Доставка в ${deliveryToCountry} буде коштувати ${cost} кредитів`)

    break;

  case 'чилі':
    cost = 250;
    alert (`Доставка в ${deliveryToCountry} буде коштувати ${cost} кредитів`)

    break;

  case 'австралія':
    cost = 170;
    alert (`Доставка в ${deliveryToCountry} буде коштувати ${cost} кредитів`)

    break;

  case 'індія':
    cost = 80;
    alert (`Доставка в ${deliveryToCountry} буде коштувати ${cost} кредитів`)

    break;
    
  case 'ямайка':
    cost = 120;
    alert (`Доставка в ${deliveryToCountry} буде коштувати ${cost} кредитів`)

    break;

  default:
      alert ('У вашій країні доставка недоступна');
    break;
}

