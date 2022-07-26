let demo = document.querySelector(".text");
let style = document.querySelector(".dynamicStyle");

let string = `/**大家好,我是小张
* 下面我们来画一个太极图
* 首先准备一个div
*/
.circle{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
@media(max-width: 500px){
    .circle{
        width: 100px;
        height: 100px;
    }
    #content{
        margin-right: 50px;
    }
}
/*下面把这个div变成太极图
*首先把他变成圆
*/
.circle{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*然后将其背景色变成黑白两色
*/
.circle{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*然后添加两个伪元素充当半圆
*/
.circle::before{
    content: '';
    display: block;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
.circle::after{  
    content: '';
    display: block;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
@keyframes rot {
    0% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
.circle{
    animation: rot 2s linear  infinite;
}

`;

let n = 0;
let string2 = "";
let string1 = "";
step();
function step() {
  if (n < string.length) {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    string1 += string[n];
    demo.innerHTML = string2;
    demo.scrollTo(0, 9999);
    style.innerHTML = string1;
    n++;
    setTimeout(() => step(), 10);
  }
}
