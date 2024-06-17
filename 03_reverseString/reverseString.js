const reverseString = function(string) {
    reversedString = "";

    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string.at(i);
    }

    return reversedString;
};

// 0(h) 1(e) 2(l) 3(l) 4(o)

// Do not edit below this line
module.exports = reverseString;
