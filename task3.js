function incrementItems (arr){
    let inr = []
    for (let number of arr){
        inr.push(number+1)
    }
    return inr
}

alert(incrementItems([0, 1, 2, 3]))
alert(incrementItems([2, 4, 6, 8]))
