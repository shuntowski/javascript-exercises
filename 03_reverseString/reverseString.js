const reverseString = function(input) {
    //take string
    //slice off first character, put it on the end
    //repeat it until all the characters have been dealt with

    let result = '';

    for(let i = 0; i < input.length; i++){
        let nextChar = input.charAt(input.length-i-1);
        result = result + nextChar;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
