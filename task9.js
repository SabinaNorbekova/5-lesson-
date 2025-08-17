function check (arr, son){
    for (let i = 0; i < arr.length; i ++){
        if (son == arr [i]){
            return true
        }
    }
    return false
}

alert(check([1, 2, 3, 4, 5], 3) )
alert(check([1, 1, 2, 1, 1], 3) )