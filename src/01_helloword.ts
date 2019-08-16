/**
 *　<a href="https://www.runoob.com/typescript/ts-tutorial.html" ></a>
 * type script 01: 基础使用
 *  注意：
 *    1、变量名或方法名不要定义 为 name ，否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
 */
const hello: string = 'Hello World!';
console.log(hello);

/**
 定义类
 */
class Student {

  /**
   * 定义方法
   */
  test(): void {
    console.log("name ...");
  };

}

/**
 * 创建创建，并调用方法
 */
var xiaoming = new Student();
xiaoming.test();

console.log("-----------------------------");

/**
 * 声明变量
 *  语法：
 *    var [变量名]: [类型] = 值;
 *    其中 : 类型 可以省略，如果省略了，则该变量名为 any 类型.
 *
 */
let uanme = "未指定具体类型，则为 any 类型";
console.log(uanme);

let num: number = 5;
console.log(num);
console.log("num的类型为:" + typeof num);

let text: string = "我是字符串";
console.log(text);

let bool: boolean = false;
console.log(bool);

let strArr: string[] = ["我是字符串数组元素0", "我是字符串数组元素1"];
console.log(strArr);
console.log(strArr[0]); //获取指定元素

// 遍历数组 ，for of 遍历的是数组元素值
for (let item of strArr) {
  console.log("使用 for of 遍历：" + item);
}
// for in 遍历的是数组的索引，索引的类型不是 number，而是 string
for (let index in strArr) {
  console.log("使用 for in 遍历：" + strArr[index]);
}

/**
 * 声明类
 */
class Person {

  /**
   * 成员属性 name，默认为 public 修饰
   */
  public name: string;

  age: number;

  /**
   * 声明构造函数
   * @param name
   * @param age
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const personArr: Person[] = [new Person("小明", 10), new Person("小张", 20)];
for (let person of personArr) {
  console.log("name:" + person.name + ",age:" + person.age);
}
for (let index in personArr) {
  console.log("for in person:" + personArr[index].name + ",age:" + personArr[index].age);
}

//使用箭头函数遍历
strArr.forEach(item => console.log(item));

let numArr: number[] = [1, 2, 3];
console.log(numArr);

/**
 * 定义元组：
 *  元组中的类型可以是任意的，而数组中的类型只能是一种类型
 *
 */
let tuple: [string, number] = ["ahha", 1];
tuple.forEach((key, value) => {
  console.log("key:" + key + ",value:" + value);
});

/**
 * 定义枚举
 */
enum Color {
  Red = "a", Green = 3, Blue = 5
}

console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
for (let item in Color) {
  console.log(item);
}

console.log(Color);

/**
 * 定义方法
 */
function test3(): void {
  console.log("void，方法的返回值")
}

test3();

/**
 * any :任意类型
 */
let x: any = 1;
console.log("x is:" + x);
x = "haha";
console.log("x is:" + x);
x = false;
console.log("x is:" + x);

console.log("---------------------------------------------------------------");

/**
 *条件
 */
const value: number = 5;
if (value > 0) {
  console.log("条件成功，执行....");
} else if (value == 0) {
  console.log("value 值为 :" + value);
} else {
  console.log("value 值为:" + value);
}

/**
 * switch 语句
 */
let text2: string;
switch (value) {
  case 1:
    text2 = value.toFixed();
    break;
  case 2:
    text2 = value.toFixed();
    break;
  default:
    text2 = value.toFixed();
    break;
}
console.log(text2);
