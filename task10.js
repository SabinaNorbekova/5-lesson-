function arrayValuesTypes(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(typeof(arr[i]));
    }
    return result;
}

console.log(arrayValuesTypes([1, 2, "salom"]));
