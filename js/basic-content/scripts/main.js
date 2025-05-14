// 获取图片元素
const myImage = document.querySelector("img");

// 获取点击事件并赋值
myImage.onclick = () => {
    // 获取src属性值
    const mySrc = myImage.getAttribute("src");
    // 判断图片路径是否相同
    if (mySrc === "images/firefox-icon.png"){
        // 若相同则设置另一张图片路径
        myImage.setAttribute("src","images/edge-icon.png");
    }else{
        // 若不相同则设置本来的路径
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

// 获取图片和标题的引用
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    // 获取用户输入的数据
    const myName = prompt("Please enter your name.");
    // 判断是否有名字
    if(myName){
        // 存储用户数据
        localStorage.setItem("name", myName);
        // 设置标题内容
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }else{
        setUserName();
    }

};

// 判断是否存储数据
if(localStorage.getItem("name")){
    // 如果有值，则用户名为存储值
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}else{
    // 如果没值，则让用户输入自己的名字
    setUserName();
};

// 监测是否点击按钮
myButton.onclick = () =>{
    setUserName();
};

