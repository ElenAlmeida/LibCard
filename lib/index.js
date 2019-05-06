function invalidLetter(array) {
  return (array.every((elem) =>(typeof elem !== 'number' || isNaN(elem)) ? false : true));
}
function invalidNumbersEqual(cardNumber) {
  return (cardNumber.every(digito => digito === cardNumber[0]) ? false : true);
}
function validCardSize(cardNumber) {
  return ((cardNumber > 11 || cardNumber.length < 20) ? true : false);
}
function luhnAlgorithm(arr) {
  const multiplicandoArray = arr.map((elem, index) => (index % 2 === 0) ? (elem * 2) : elem).map((elem) => (elem > 9) ? (elem - 9) : elem)
    .reduce((elem, result) => (result + elem));
  const result = 10 - (multiplicandoArray % 10); 
  return result;
}
function validaDigito(number) {
  const removeFirstDigit = number.shift();
  const confirmDigit = luhnAlgorithm(number);
  const result = (confirmDigit === removeFirstDigit) ? true : false;
  return result;
}
function cardValidator(card) {  
  const turnsIntoArray = card.split('').map(Number).reverse();
  let resultValidate = (validCardSize(turnsIntoArray) && 
      invalidLetter(turnsIntoArray) === true && 
      invalidNumbersEqual(turnsIntoArray) === true) ? validaDigito(turnsIntoArray) : false;  
  return resultValidate; 
}

module.exports.cardValidator = cardValidator;