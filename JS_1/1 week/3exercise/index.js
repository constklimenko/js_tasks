/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  
  let h = Number(hours);
  let m = Number(minutes);
  let inter = Number(interval);

  function IntegerDivision(val, by){
    return (val - val % by) / by;
  }

  h += IntegerDivision(inter, 60);


  m += inter % 60;
  h += IntegerDivision(m, 60);
  h %= 24;
  m %= 60;
  // console.log(`${(h/10 < 1?0:"")}${h}:${(m/10 < 1?0:"")}${m}`);
  // return `${(h/10 < 1?0:"")}${h}:${(m/10 < 1?0:"")}${m}`; 

  return  "" + (h/10 < 1?0:"") + h + ":" + (m/10 < 1?0:"") + m;
  


};
