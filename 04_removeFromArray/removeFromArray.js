const removeFromArray = function(array, ...elements) {
    let returnArray = new Array();

    for(let i = 0; i < array.length; i++){
        if (elements.find(array[i]) == undefined){
            returnArray.push(array[i]);
        }
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
