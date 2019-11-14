// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

  let command_list = command.split(" ");

 

  if(command_list[0] == "SHOW"){
    return showTelephoneBook();
  };

  if(command_list[0] == "ADD"){

    //console.log(`adding number: ${command_list[1]}, ${command_list[2].split(",")}`)
    addNumber(command_list[1], command_list[2].split(","));
    //console.log(`added succesful`)
  };

  if(command_list[0] == "REMOVE_PHONE"){
    //console.log(`removing number: ${command_list[1]}`)
    return removeNumber(command_list[1]);
    //console.log(`removed succesful`)
  };



  function showTelephoneBook(){
    let result = [];

    for (let nm in phoneBook){
      if(phoneBook[nm].length > 0){

        if(result[0] == 0){
          result[0] = `${nm}: ${phoneBook[nm].join(", ")}`;
        }
        else{
          result.push(`${nm}: ${phoneBook[nm].join(", ")}`);
          
          if(result.length > 1){
            result.sort();
          }
        }
        
        //console.log(`result for ${nm}: ${result}`);
      }
    }

    //console.log(`last result: `);
    //console.log(result);

    return result;
  };
  
  function addNumber(name, numbers){
    numbers_arr = [...numbers];

    
    if(phoneBook[name]){

      

      for(let j in numbers_arr){
        

        let is_phone_in_book = false;

        for(let i in phoneBook[name]){         

          if(phoneBook[name][i] == numbers_arr[j]){
            is_phone_in_book = true;// проверяет есть ли уже номер в телефонной книге
          }

          
        }

        if(!is_phone_in_book){
          phoneBook[name].push(numbers_arr[j])

        }


      }

      
    } else {
      phoneBook[name] = numbers_arr;
    }

  };

  function removeNumber(number){
    for(n in phoneBook){
      let is_phone_in_book = false;

        for(let i in phoneBook[n]){         

          if(phoneBook[n][i] == number){
            phoneBook[n].splice(i, 1);// удаление совпавшего номера
            return true;
          }

          
        }

    }

    return false;
  }

};
