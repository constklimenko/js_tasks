/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

  let hashtagsBox = [];

  for (i in hashtags){
    var isInBox = false;

    hashtags[i] = hashtags[i].toLowerCase();
    
    for (j in hashtagsBox){
      if(hashtags[i] == hashtagsBox[j]){
        isInBox = true;
      }
    }

    if(!isInBox){
      hashtagsBox.push(hashtags[i]);
    }

    // console.log(hashtagsBox)
  }

  return hashtagsBox.join(", ");


};
