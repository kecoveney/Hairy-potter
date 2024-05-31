import { usePottery } from './PotteryCatalog.js';

export const potteryList = () => {
    // Get the items to be sold
    const finishedPottery = usePottery();

    // Generate HTML representations for each pottery item
    let potteryHTML = '';
    finishedPottery.forEach(pottery => {
        potteryHTML += `
            <section class="pottery" id="pottery--${pottery.id}">
                <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">
                    Price is $${pottery.price}
                </div>
            </section>
        `;
    });

    // Get the DOM target and insert the generated HTML
    const potteryListElement = document.querySelector('.potteryList');
    potteryListElement.innerHTML = potteryHTML;
};