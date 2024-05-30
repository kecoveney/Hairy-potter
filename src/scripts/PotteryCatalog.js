const potteryToSell= []
export const toSellOrNotToSell = (pottery) =>{
    if (!pottery.cracked){
        //this determines the price of the pottery by weight if it is not cracked.
        if(pottery.weight >= 6){
            pottery.price = 40
        }
        else {
            pottery.price = 20
        }
        potteryToSell.push(pottery) // adds the pottery to the pottery to sell array
    }
    return pottery
}

export const usePottery = () => {
    return potteryToSell.slice() //returns a copy of the array
}