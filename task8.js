function arrBetween(a, b, arr){
    let between = []
    for (let i = 0; i < arr.length; i ++){
        if (arr [i] > a && arr [i] < b){
            between.push(arr [i])
        }
    }
    return between
}

alert (arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) 