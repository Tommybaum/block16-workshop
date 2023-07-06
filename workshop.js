//return total cost of all prescriptions
//include coupon and subscription discounts into final price 
//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
//create a function that will read the object
//create a return that will give the total cost back
const calculateTotal = (refillCost, hasSubscription, hasCoupon) => {
    // Calculate the total cost of refills
    let totalCost = refillCost.pricePerRefill * refillCost.refills;
  
    // Apply subscription discount 
    if (hasSubscription) {
      totalCost *= 0.75; 
    }
  
    // Apply coupon discount 
    if (hasCoupon) {
      totalCost -= 10;
    }
  
    return totalCost;
  };
const timmyTotal = calculateTotal(timmy, timmy.subscription, timmy.coupon);
const sarahTotal = calculateTotal(sarah, sarah.subscription, sarah.coupon);
const rockyTotal = calculateTotal(rocky, rocky.subscription, rocky.coupon);

console.log(`Timmy's grand total is $${timmyTotal}.`);
console.log(`Sarah's grand total is $${sarahTotal}.`);
console.log(`Rocky's grand total is $${rockyTotal}.`);