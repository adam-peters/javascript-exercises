const removeFromArray = function() {

    // The quantity of arguments is unknown
    // so we store them in an array
    const args = Array.from(arguments);

    if(args.length === 0) {
        return "ERROR";
    }

    if(args.length === 1) {
        return args[0];
    }

    // Seperating the first argument from the rest
    // which makes args become a list of numbers 
    // we want removed from this array
    let originalArray = args.shift(); 

    // Create a return array
    let finalArray = [];

    // Only add the number if it isn't in the args list
    // Array.indexOf == -1, means the item was not found
    // for in loop returns the index as num
    for(num in originalArray) {
        if(args.indexOf(originalArray[num]) == -1) {
            finalArray.push(originalArray[num]);
        }
    }

    return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
