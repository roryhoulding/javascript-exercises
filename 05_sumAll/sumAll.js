const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR'
    }

    let lowestNum = num1 > num2 ? num2 : num1;
    let highestNum = num1 > num2 ? num1 : num2;
    let sum = 0;

    for (let i = lowestNum; i <= highestNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
