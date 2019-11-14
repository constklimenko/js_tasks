/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var tweets = tweet.split(" ");
	var acc = []
	var filteredTweets = tweets.reduce(filterCell, acc);

	return filteredTweets

};

function filterCell(acc, item) {
	// console.info("acc =" + String(acc))
	if (item.indexOf("#") != -1){

		if (!Array.isArray(acc)){
			acc = new Array();
		}
		// console.info("acc =" + String(acc));
		// console.info("item =" + item.slice(1, item.length));
		acc[acc.length] = (item.slice(1, item.length));
		return acc

	}
	else{
		return acc
	}
}

// console.info(getHashTags('Прохожу курс на #coursera по #javascript'))