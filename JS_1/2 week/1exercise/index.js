/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  let tweetArray = tweet.split(" ");
  // console.log(tweetArray);

  let result = [];

  for (let t in tweetArray){

    // console.log(tweetArray[t]);
    if(tweetArray[t].indexOf("#") != 0){
      continue;
    }
    else {
      tw = tweetArray[t].slice(1);
      result.push(tw);
      //console.log(result);
    };
  };

  return result;
};
