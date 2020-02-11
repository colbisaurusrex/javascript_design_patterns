/* Module Pattern */
// TLDR; this is useful when you want a mixture of private/public variables and methods. Utilizes closure.
const shoppingBasket = (() => {
  const basket = [];

  const privateFunction = () =>
    console.log("This function cannot be accessed outside of this module");

  return {
    addItem: item => basket.push(item),
    removeItem = item => console.log('logic to find and remove item from basket array'),
    getItemCount = () => basket.length,
  };
})();

shoppingBasket.addItem('apple')
shoppingBasekt.addItem('yogurt')
shoppingBasket.removeItem('apple')

shoppingBasket.getItemCount() // should return one

console.log(shoppingBasket.basket) 
/* will return undefined because basket is not apart of the public API. It only exists in closure. */

/* ------------------------------------------------------------------- */


/* Variations */