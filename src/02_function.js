/**
 type script 02: 函数
 */
function test() {
    console.log("我是一个函数");
}
test();
/**
 * 函数返回值:
 *  语法：
 *    function function_name(): return_type{}
 *
 *  返回值要与类型一样
 *
 */
function test2() {
    test(); // 也可以调用其它函数
    return "haha";
}
var result = test2();
console.log(result);
/**
 * 带参数的函数
 * @param name
 * @param age
 */
function parameterFunction(name, age) {
    return "名:" + name + ",age:" + age;
}
console.log(parameterFunction("haha", 10));
/**
 * 可选参数，只需要 在参数名 添加 ?
 *
 * @param name
 * @param age
 */
function optionParameterFunction(name, age) {
    if (age) {
        console.log("可选参数：名:" + name + ",age:" + age);
    }
    else {
        console.log("可选参数：name:" + name);
    }
}
optionParameterFunction("张三");
optionParameterFunction("立式", 5);
// optionParameterFunction("立式", 5, 5); 三个参数时，报错
/**
 * 默认参数
 *  默认参数可以有多个
 *
 */
function defaultParameterFunction(name, age, haha) {
    if (age === void 0) { age = 10; }
    if (haha === void 0) { haha = "a"; }
    console.log("默认参数：名:" + name + ",age:" + age + ",haha：" + haha);
}
defaultParameterFunction("张三");
defaultParameterFunction("丽水", 20);
/**
 * 可变参数
 * @param name
 * @param args
 */
function variableFunction(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("name:" + name + ",args:" + args.join(","));
}
variableFunction("haha");
variableFunction("haha", "args1", "args2", "args3");
