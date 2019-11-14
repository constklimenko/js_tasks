/**
 * @param {String} date
 * @returns {Object}
 */
// module.exports 
w = function(date) {

    add: function(value, command) {
        console.info("add done")
        return this;
    },

    subtract: function(value, command) {
        console.info("subtract done")
        return this;
    }



};

w(222).add(1, 2);