// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";


// Make 5 pieces of pottery at the wheel
const pottery1 = makePottery("Mug", 1, 3);
const pottery2 = makePottery("Platter", 5, 7);
const pottery3 = makePottery("Bowl", 2, 4);
const pottery4 = makePottery("Vase", 3, 6);
const pottery5 = makePottery("Plate", 4, 5);


// Fire each piece of pottery in the kiln
const firedPottery1 = firePottery(pottery1, 2100);
const firedPottery2 = firePottery(pottery2, 2300);
const firedPottery3 = firePottery(pottery3, 2000);
const firedPottery4 = firePottery(pottery4, 2200);
const firedPottery5 = firePottery(pottery5, 2500);

// Determine which ones should be sold, and their price
const potteryToSell1 = toSellOrNotToSell(firedPottery1);
const potteryToSell2 = toSellOrNotToSell(firedPottery2);
const potteryToSell3 = toSellOrNotToSell(firedPottery3);
const potteryToSell4 = toSellOrNotToSell(firedPottery4);
const potteryToSell5 = toSellOrNotToSell(firedPottery5);

// Invoke the component function that renders the HTML list


// Log the pottery objects to the console
console.log(pottery1);
console.log(pottery2);
console.log(pottery3);
console.log(pottery4);
console.log(pottery5);
console.log(firedPottery1);
console.log(firedPottery2);
console.log(firedPottery3);
console.log(firedPottery4);
console.log(firedPottery5);


// Get the array of items to be sold
const itemsForSale = usePottery();
console.log(itemsForSale);