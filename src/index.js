
exports.min = function min (array) {
    let result 
    if (!array || !array.length){
        return 0;
    }else {
        result = Math.min(...array);
        return result;
    }
}

exports.max = function max (array) {
    let result ;
    if (!array || !array.length){
        return 0;
    }else {
        let result = Math.max(...array);
        return result ;
    }  
}

exports.avg = function avg (array) git 
    if (!array || !array.length){
        return 0;
    }else {
        return array.reduce((a, b) => (a + b)) / array.length;
    }  
}
