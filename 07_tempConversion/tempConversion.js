const convertToCelsius = function(degreesInF) {
  return parseFloat(((degreesInF - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(degreesInC) {
  return parseFloat((degreesInC * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
