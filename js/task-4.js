"use strict";

function getShippingCost(country) {
    let countryForDelivery=["China","Chile","Australia","Jamaica"];
    let priceForDelivery=[100,250,170,120];
  switch (country) {
    case `Australia`:
      return `"Shipping to ${countryForDelivery[2]} will cost ${priceForDelivery[2]} credits"`;
      break;
    case `China`:
      return `"Shipping to ${countryForDelivery[0]} will cost ${priceForDelivery[0]}  credits"`;
      break;
    case `Chile`:
      return `"Shipping to ${countryForDelivery[1]} will cost ${priceForDelivery[1]}  credits"`;
      break;
    case `Jamaica`:
      return `"Shipping to ${countryForDelivery[3]} will cost ${priceForDelivery[3]}  credits"`;
      break;
    default:
      return `"Sorry, there is no delivery to your country"`;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
