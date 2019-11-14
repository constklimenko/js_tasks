/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection, ...args) {
   let result = [];
   for (item of collection){
       let box = {};
       Object.assign( box, item);
       result.push(box);
   }
      
   if(args){
       let arr_selects = [];
       let arr_filters = [];

       for(item of args){
           if (item.type == `select`){
               arr_selects.push(item.func);
           }
           if (item.type == `filter`){
               arr_filters.push(item.func);
           }

       }

       if(arr_filters){
           for(let filter of arr_filters){
               result = filter(result);
           }

       }
       if(arr_selects){
           for(let select of arr_selects){
               result = select(result);
           }

       }
       



   }
   
   return  result;

}

/**
 * @params {String[]}
 */
function select(...args) {
    

    let object_for_return = {};

    object_for_return.type = `select`;// тип запроса
    object_for_return.func = (sample_object) => {// возвращаемая из метода функция; поступет массив объектов
        for (let sample_item of sample_object){
            for(let key in sample_item){
                if(!args.includes(key)){
                    //console.log(`удаляем ${key} у ${sample_item.name}`)
                   delete sample_item[key]// удаляются все свойства объектов, не совпадающие по ключу с  args
                }
            }
        }

        return sample_object;
    }

    return object_for_return;
    

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    let object_for_return = {};

    object_for_return.type = `filter`;// тип запроса
    object_for_return.func = (sample_object) => {// возвращаемая из метода функция
        let len = sample_object.length;
        //console.log(`длина` + sample_object.length);
         for (let i = 0;i < len; i = i + 1){
            //console.log(`i =  ${i} len =  ${len}`)
            let sample_item = sample_object[i];
            //console.log(`выбираем  ${sample_item.name}`)
             for(let key in sample_item){
                //console.log(`выбираем ${key} у ${sample_item.name}`)
                 if(key == property && !values.includes(sample_item[key])){
                     //console.log(`удаляем ${sample_item.name}`)
                     sample_object.splice(sample_object.indexOf(sample_item) , 1)// удаляются все элементы коллекции, не содержащие нужных значений
                     len--;
                     i--;
                    }
             }
         }

        return sample_object;
    }

    return object_for_return;

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
