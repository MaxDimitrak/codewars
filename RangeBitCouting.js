function rangeBitCount(a, b) {
    let radixArray = [];
    let newArray = [];
    let result = 0;
    while(a <= b){
        newArray.push(a)
        a++;
    }
    for (let i = 0; i < newArray.length; i++){
        radixArray.push(newArray[i].toString(2))
    }
    for (let i = 0; i < radixArray.length; i++){
        for (let j = 0; j < radixArray[i].length; j++)
        {
            if (radixArray[i][j] == '1')
                result += 1
        }
    }
    return result
}

rangeBitCount(1, 8);

