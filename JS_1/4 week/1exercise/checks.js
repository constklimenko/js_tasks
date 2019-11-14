// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    },

    {
        name: 'Памелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Кофе'
    },

    {
        name: 'Мирабелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Кофе'
    },

    {
        name: 'Элла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Кофе'
    },

    {
        name: 'Стервелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Кофе'
    },

    {
        name: 'ла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Кофе'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым
 assert.deepEqual(result, [
     { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
     { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
     { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
     { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
     { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
 ]);

 console.info('OK!');

console.log(friends);

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result2 = lib.query(
    friends,
    lib.select('name', 'gender'),
    lib.filterIn('favoriteFruit', ['Банан', 'Яблоко'])
);

console.log(result2);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result2, [   
    { name: 'Эмили', gender: 'Женский'},
    { name: 'Мэт', gender: 'Мужской' },
    { name: 'Брэд', gender: 'Мужской' },   
]);


console.info('OK 2!');