function sumArray (arr){
    let sum = 0
    for (let i = 0; i <= arr.length; i++){
        sum += i
    }
    return sum
}

alert(sumArray([1, 2, 3, 4, 5]))