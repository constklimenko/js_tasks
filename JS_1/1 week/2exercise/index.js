/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
  let h = Number(hours);
  let m = Number(minutes);

  if(( h >= 0 & h <= 12 ) & (m >= 0 & m <= 59)) {
    return true;
  }
  else return false;
};
