let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `/* 你好，我叫小张
 * 接下来我想给你展示一下我的前端功底
 * 首先我要在这里放一个div
 **/
#div1{
    width: 200px;
    height: 200px;
}
/* 好单调呀
 * 我准备把它变成一个八卦图
 * 首先，然后，这个div就变成了圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 指div为圆成功了！
 * 加点颜色进去
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 颜色是对了，但是怎么是这样对称的
 * 不好意思，我调整调整
 **/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle,rgba(255,255,255,1)0%,rgba(255,255,255,1)25%,rgba(0,0,0,1)25%,rgba(0,0,0,1)100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle,rgba(0,0,0,1)0%,rgba(0,0,0,1)25%,rgba(255,255,255,1)25%,rgba(255,255,255,1)100%,rgba(0,0,0,1)100%);
}

`;
let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        //如果不是回车，照搬
        //如果是回车，往后面追加一个br
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            // 如果n不是最后一个，就继续执行函数
            n += 1;
            step();
        }
    }, 0);
};

step();
