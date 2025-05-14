// DOM文档对象模型，使用document对象来对文档内容进行操作
// querySelector()函数获取元素内容并将其储存在myHeading变量中
const myHeading = document.querySelector("h1");
// textContent对象用来改变元素内容
myHeading.textContent = "Hello world!";

// 变量是值储存的容器
// 声明变量用 let + 变量名
let myVariable;
// 变量可以进行赋值或更改
myVariable=1;
myVariable=2;

// 变量可以储存多个数据类型
// 1.字符串 用双引号或单引号括起来的值。 let myVariable="hello";或者let myVariable='hello';
// 2.数字 没有被引号括起来的数字。 let myVariable=10;
// 3.布尔 真假值 ture/false。 let myVariable=true;或let myVariable=false;
// 4.数组 存储多个值的结构。 let myVariable=[1,'hello',2] 可以用myVariable[0]来获取数组成员等等
// 5.对象 任意内容。 const myHeading = document.querySelector("h1");以及上面所有的示例

// 运算符
// + 既可以数值运算，也可以对字符串进行拼接 "hello"+"world";
// = 进行赋值
// === 严格相等 比较两个值的数值类型和值是否相等 返回true/false
// !、!== 非或不等于 返回与之前逻辑值完全相反的值
// let a = 1; !(a === 1) 返回false。let a = 1; a !== 1;返回false。

// 条件语句(常用的条件语句是if...else语句)
let iceCream = "chocolate";
// if()括号中是一个表达式。如果为true，则运行第一个代码块;如果为false，则运行else关键字后面第二个代码块
if (iceCream === "chocolate") {
    alert("我最喜欢巧克力冰淇淋了！");
} else {
    alert("但是巧克力才是我的最爱呀……");
}

// 函数 (将重复使用的功能封装起来的方式，避免重复书写代码)
// 一般以“()”结尾，可以接收参数，多个参数用逗号隔开
// 比如document.querySelector() 和 alert() 是浏览器内置的函数。
// 前者可以获取对应元素内容。后者可以在浏览器弹出警告框，参数是一个字符串，表示警告框的内容

// 定义函数
// function + 函数名 (参数...){}
// 这里定义一个函数用来处理两个数值的乘积
function multiply (num1,num2){
    let result = num1 * num2;
    // return 将值返回到函数的外面，因为函数内的变量只能在函数内使用，这叫做变量的作用域
    return result;
}

multiply(3,4);
multiply(3,5);


