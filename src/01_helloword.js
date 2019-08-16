/**
 * type script
 * : 注意，变量名或方法名不要定义 为 name ，否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
 */
console.log(name);
var hello = 'Hello World!';
console.log(hello);
/**
 定义类
 */
var Student = /** @class */ (function () {
    function Student() {
    }
    /**
     * 定义方法
     */
    Student.prototype.test = function () {
        console.log("name ...");
    };
    ;
    return Student;
}());
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
var uanme = "未指定具体类型，则为 any 类型";
console.log(uanme);
var num = 5;
console.log(num);
console.log("num的类型为:" + typeof num);
var text = "我是字符串";
console.log(text);
var bool = false;
console.log(bool);
var strArr = ["我是字符串数组元素0", "我是字符串数组元素1"];
console.log(strArr);
console.log(strArr[0]); //获取指定元素
// 遍历数组 ，for of 遍历的是数组元素值
for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
    var item = strArr_1[_i];
    console.log("使用 for of 遍历：" + item);
}
// for in 遍历的是数组的索引，索引的类型不是 number，而是 string
for (var index in strArr) {
    console.log("使用 for in 遍历：" + strArr[index]);
}
/**
 * 声明类
 */
var Person = /** @class */ (function () {
    /**
     * 声明构造函数
     * @param name
     * @param age
     */
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var personArr = [new Person("小明", 10), new Person("小张", 20)];
for (var _a = 0, personArr_1 = personArr; _a < personArr_1.length; _a++) {
    var person = personArr_1[_a];
    console.log("name:" + person.name + ",age:" + person.age);
}
for (var index in personArr) {
    console.log("for in person:" + personArr[index].name + ",age:" + personArr[index].age);
}
//使用箭头函数遍历
strArr.forEach(function (item) { return console.log(item); });
var numArr = [1, 2, 3];
console.log(numArr);
var tuple = ["ahha", 1]; // 定义元组
tuple.forEach(function (key, value) {
    console.log("key:" + key + ",value:" + value);
});
/**
 * 定义枚举
 */
var Color;
(function (Color) {
    Color["Red"] = "a";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
for (var item in Color) {
    console.log(item);
}
console.log(Color);
/**
 * 定义方法
 */
function test() {
    console.log("void，方法的返回值");
}
test();
/**
 * any :任意类型
 */
var x = 1;
console.log("x is:" + x);
x = "haha";
console.log("x is:" + x);
x = false;
console.log("x is:" + x);
console.log("---------------------------------------------------------------");
/**
 *条件
 */
var value = 5;
if (value > 0) {
    console.log("条件成功，执行....");
}
else if (value == 0) {
    console.log("value 值为 :" + value);
}
else {
    console.log("value 值为:" + value);
}
/**
 * switch 语句
 */
var text2;
switch (value) {
    case 1:
        text2 = value.toString();
        break;
    case 2:
        text2 = value.toString();
        break;
    default:
        text2 = value.toString();
        break;
}
console.log(text2);
