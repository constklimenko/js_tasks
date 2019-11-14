/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {



  inner_date = {

    subtract: function (subtracted_time, type_of_time) {
      if (subtracted_time < 0 || subtracted_time == NaN) {
        throw new TypeError('неверно передано значение');
      };

      //console.log(`subtracted_time ` + subtracted_time);



      switch (type_of_time) {
        case 'years':
          this.innitial_value.setFullYear(this.innitial_value.getFullYear() - subtracted_time);

          this.value = this.valueMaker();
         // console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'months':
         // console.log(`изнутри уменьшаем месяц this.innitial_value: ` + this.innitial_value);

         // console.log(` изнутри subtracted_time ` + subtracted_time);
         // console.log(`изнутри  this.innitial_value.getMonth ` + this.innitial_value.getMonth());
          this.innitial_value.setMonth(this.innitial_value.getMonth() - subtracted_time);

         // console.log(`изнутри this.innitial_value: ` + this.innitial_value); console.log(this.innitial_value);
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;



        case 'days':
          this.innitial_value.setDate(this.innitial_value.getDate() - subtracted_time);
          this.value = this.valueMaker();
         // console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'hours':
          this.innitial_value.setTime(this.innitial_value.getTime() - subtracted_time * 60000 * 60)
          this.value = this.valueMaker();
         // console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'minutes':
          this.innitial_value.setTime(this.innitial_value.getTime() - subtracted_time * 60000)
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;
        default:
          throw new TypeError('неверно указана единица измерения');
      }

    },

    add: function (added_time, type_of_time) {
      if (added_time < 0 || added_time == NaN) {
        throw new TypeError('неверно передано значение');
      }

      switch (type_of_time) {
        case 'years':
          this.innitial_value.setFullYear(this.innitial_value.getFullYear() + added_time);
          //console.log(`прибавили к ${type_of_time} число ${added_time} получили ${this.innitial_value}`);
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'months':
          this.innitial_value.setMonth(this.innitial_value.getMonth() + added_time);
          //console.log(`прибавили к ${type_of_time} число ${added_time} получили ${this.innitial_value}`);
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'days':
          this.innitial_value.setDate(this.innitial_value.getDate() + added_time);
          //console.log(`прибавили к ${type_of_time} число ${added_time} получили ${this.innitial_value}`);
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'hours':
          this.innitial_value.setHours(this.innitial_value.getHours() + added_time);
          //console.log(`прибавили к ${type_of_time} число ${added_time} получили ${this.innitial_value}`);
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;
        case 'minutes':
          this.innitial_value.setMinutes(this.innitial_value.getMinutes() + added_time);
          //console.log(`прибавили к ${type_of_time} число ${added_time} получили ${this.innitial_value}`);
          this.value = this.valueMaker();
          //console.log(this.value + " - содержимое value на этом шаге");
          return this;
        default:
          throw new TypeError('неверно указана единица измерения');
      }
    },






  },






    inner_date.innitial_value = new Date(date);
  inner_date.valueMaker = function valueMaker() {
    let month = (this.innitial_value.getMonth() < 10) ? ("0" + (this.innitial_value.getMonth() + 1)) : (this.innitial_value.getMonth() + 1);
    let date = (this.innitial_value.getDate() < 10) ? ("0" + this.innitial_value.getDate()): (this.innitial_value.getDate());
    let hours = (this.innitial_value.getHours() < 10) ? ("0" + this.innitial_value.getHours()): (this.innitial_value.getHours());
    let minutes = (this.innitial_value.getMinutes() < 10) ? ("0" + this.innitial_value.getMinutes()): (this.innitial_value.getMinutes());

    let result = `${this.innitial_value.getFullYear()}-${month}-${date} ${hours}:${minutes}`

    //console.log(`result ` + result);
    return result;
  };


  //console.log(`содержимое ` + inner_date.value);

  return inner_date;
};



