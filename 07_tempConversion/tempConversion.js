const ftoc = function(fTemp) {
  return ((Math.round((fTemp - 32) * (5/9)) * 10) / 10)
};

const ctof = function(cTemp) {
  return (Math.round(((cTemp * 1.8) + 32) * 10) / 10)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
