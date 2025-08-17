function removeSpaces(str) {
    let result = ""
    for (let i = 0; i < str.length; i++){
        if (str [i] != " "){
            result += str [i]
        }
    }
    return result
}

console.log(removeSpaces("Hello World! How are you?")); 