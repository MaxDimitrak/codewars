function divCon(x){
    let sumOfStrNum = 0;
    let result = 0;
    let sumOfNum = 0;

    for(let i = 0; i < x.length; i++){
       if(typeof(x[i]) === 'string'){
           sumOfStrNum += Number(x[i])
       }
       else
           sumOfNum += x[i]
    }
    result = sumOfNum - sumOfStrNum;
    return result;
}

divCon([1,2,3,'4','5'])

