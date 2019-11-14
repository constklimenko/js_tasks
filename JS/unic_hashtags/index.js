/**
 * @param {String[]} hashtags
 * @returns {String}
 */
// module.exports 
w1 = function(hashtags) {
    var hashtags0 = "" + hashtags
    var hashtags1 = hashtags0.split(", ")
    console.info("hashtags1 =" + hashtags1[0] + ", " +
        hashtags1[1] + ", " +
        hashtags1[2])

    hashtags2 = hashtags1.map(LowerCase())
    console.info("hashtags2 =" + hashtags2)
    return hashtags2.join(', ')

};

function LowerCase(str) {
    console.info(typeof str)
    str1 = String(str)
    console.info("str1 = " + str1)

    st = str1.toLowerCase()
    console.info("st = " + st)
    return st
}

console.info(w1("fggs, Faf, afeg"))