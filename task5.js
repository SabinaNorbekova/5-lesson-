function search (arr, son){
    for (let i = 0; i < arr.length; i ++){
        if (son == arr [i]){
            return i
        }
    }
    return -1
}
alert(search([1, 5, 3], 5)) 
alert(search([1, 2, 3], 4))
