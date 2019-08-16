/**
 * 接口
 */
interface IPerson {

  firstName: string,

  lastName: string,

  say: () => string;
}


const coutomer: IPerson = {

  firstName: "Tom",

  lastName: "Hanks",

  say: function () {
    return "Hi There";
  }

};
console.log(coutomer.firstName);
console.log(coutomer.lastName);
console.log(coutomer.say());
