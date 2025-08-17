    function evenOddIndexSums(arr) {
        let even_sum = 0;
        let odd_sum = 0;
        for (let i = 0; i < arr.length; i++){
            if(i % 2 == 0){
                odd_sum += arr [i]
            }else {
                even_sum += arr [i]
            }
        }
        return `even: ${even_sum} odd: ${odd_sum}`; 
    }
    
    console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); 