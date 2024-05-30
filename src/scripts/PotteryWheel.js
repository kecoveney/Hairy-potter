let potteryKey = 1

export const makePottery = (shape, weight, height) =>{
    const newPottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryKey // Assign the current pottery ID
    }
    potteryKey++

    return newPottery
}