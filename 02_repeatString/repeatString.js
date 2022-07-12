const repeatString = function(input, numRepetitions) {
    let result = '';

    if (numRepetitions < 0){
        return 'ERROR';
    }

    for (let i = 0; i < numRepetitions; i++){
        result = result + input;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
