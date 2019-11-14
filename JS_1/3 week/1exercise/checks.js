// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var date = require('./index.js');

var t = date('2017-04-16 16:35')
console.log(`initial ` + t.value);
 t.add(14, 'hours')
 console.log(`added 14 hours ` + t.value);
 t.add(54, 'minutes')
 console.log(`added 54 minutes ` + t.value);
 t.add(4, 'hours')
 console.log(`added 4 hours ` + t.value);
console.log(`первый отъём start`);
t.subtract(14, 'months');
console.log(`первый отъём substracted 14 month ` + t.value);
console.log(`второй отъём start`);
t.subtract(34, 'minutes');
console.log(`второй отъём substracted 34 minutes ` + t.value)


console.log(`основной тест`)
var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');

    
    console.log( time.value + " - финальная цифра");
assert.deepEqual(
    time.value,
    '2017-04-20 14:00',

    'Если к дате "2017-05-16 13:45" ' +
    'прибавить 24 часа, 3 дня и 15 минут, вычесть 1 месяц, ' +
    'то получится "2017-04-20 14:00"'
);

// assert.throws принимает функцию и
// проверяет, что она выбрасывает исключение определенного типа
assert.throws(
    function () {
        date('2017-05-16 13:45').add(2, 'light-years');
    },
    TypeError,

    'Если попытаться прибавить к дате световой год, ' +
    'то выбросится исключение TypeError'
);

assert.throws(
    function () {
        date('2017-05-16 13:45').add(-2, 'years');
    },
    TypeError,

    'Если попытаться передать в функцию add отрицательное число – выбросится исключение TypeError'
);

console.info('OK!');
