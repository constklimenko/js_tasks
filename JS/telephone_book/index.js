// Телефонная книга
var phoneBook = {}

function addPhone(name, telephoneNumbers) {
    if (!phoneBook[name]) {
        phoneBook[name] = []
    }
    // console.info(' 1st phoneBook[name]: ' + phoneBook[name]) // test
    for (var i = 0; i < telephoneNumbers.length; i++) {
        phoneBook[name][phoneBook[name].length] = telephoneNumbers[i]
            // phoneBook[name].sort()
            // console.info('No' + i + 'phoneBook[name]: ' + phoneBook[name]) // test
    }
}

function removePhone(number) {
    var x = false
    for (var a in phoneBook) {
        var idx = phoneBook[a].indexOf(number)

        if (idx !== -1) {
            // Второй параметр - число элементов, которые необходимо удалить
            phoneBook[a].splice(idx, 1)
            x = true

            if (x) {
                break
            }
            return x
        }
    }
}
// Array.prototype.remove = function (value) {
//   var idx = this.indexOf(value);
//   if (idx != -1) {
//       // Второй параметр - число элементов, которые необходимо удалить
//       this.splice(idx, 1);
//       return true;
//   }
//   return false;
//   }

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {
    var commandArray = command.split(' ')

    var word1 = commandArray[0]

    if (word1.indexOf('ADD') !== -1) {
        var name = commandArray[1]

        var telephoneNumbers = commandArray[2].split(',')
        return addPhone(name, telephoneNumbers)
    }

    if (word1.indexOf('REMOVE_PHONE') !== -1) {
        var telephoneNumber = commandArray[1]
        return removePhone(telephoneNumber)
    }

    if (word1.indexOf('SHOW') !== -1) {
        // console.info('phoneBook: ' + phoneBook) // test
        // var phoneBook2 = Object.create(phoneBook)
        var book = Object.getOwnPropertyNames(phoneBook)
            // console.info('book: ' + book) // test
            // console.info('phoneBook: ' + phoneBook) // test
        book.sort()
            // console.info('sorted book: ' + book) // test
        var str = "" //'[\n    '
            // console.info('str: ' + str) // test
            // console.info('phoneBook: ' + phoneBook) // test

        for (var a = 0; a < book.length; a++) {
            var i = book[a]
            str = str + "'" + i + ': '
            for (var j = 0; j < phoneBook[i].length; j++) {
                str = str + phoneBook[i][j] + ', '
                    // console.info(i + j + ' str: ' + str) // test
            }

            str = str.slice(0, str.length - 2)
            str += "'"
            str += '\n'
        }

        // str += ']'
        console.info(str)
    }
}