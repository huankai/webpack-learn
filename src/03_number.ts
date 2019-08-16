/**
 * Number
 */
console.log(Number.MAX_VALUE); // 最大值
console.log(Number.MIN_VALUE); // 最小值
console.log(Number.NaN); // NAN


function user(id: number, name: string) {
  this.id = id;
  this.name = name;
}

const u = new user(1, "admin");
user.prototype.email = "xx@xx.com";
console.log("用户id:" + u.id);
console.log("用户Name:" + u.name);
console.log("用户Email:" + u.email);


const n = 1234;
console.log(n.toFixed()); //把数字转换为字符串
console.log(n.toFixed(2)); //把数字转换为字符串,并对小数点指定位数
