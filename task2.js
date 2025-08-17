function getOddValue (arr){
    let odds = []
    for (let number of arr){
        if(number % 2 == 0){
            odds.push(number)
        }
    }
    return odds
}

alert(getOddValue([1, 2, 3,6]))