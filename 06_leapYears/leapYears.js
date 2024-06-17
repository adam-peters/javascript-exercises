const leapYears = function(year) {

    // year % 4 is true and year % 100 is not true, return true
    // or year % 4 is true and year % 100 is true and year % 400 is true
    if((year % 4 === 0 && year % 100 !== 0) ||  
        (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
            return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
