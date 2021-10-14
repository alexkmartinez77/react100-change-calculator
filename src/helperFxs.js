//Called on by calculate button to calculate each monetary change value and display it
const calculateChange = (obj) => {

  let {due, received, changeObjects} = obj;
  var remainingChange = received - due;
  if (remainingChange < 0) {
    return
  } else {
    return changeObjects.map(currency => {
      currency.quantity = Math.floor(remainingChange / currency.value);
      currency.quantity > 0 ? currency.show = true : currency.show = false;
      remainingChange = (remainingChange % currency.value).toFixed(2);
    });
  }
}

export default calculateChange;