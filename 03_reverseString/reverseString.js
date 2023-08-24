const reverseString = function(string) {
    let reversedString = '';
    for (char of string) {
        reversedString = char + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
