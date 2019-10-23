

function printHello(){
    console.log('Hello,World!');
}
//setTimeout(cb, ms) 两秒后执行以上函数
//setTimeout(printHello,2000);

//clearTimeout(t)创建的定时器
//var t=setTimeout(printHello,2000);
//clearTimeout(t);

//setInterval(cb, ms)全局函数
//每隔两秒就会输出一次"Hello, World!"
setInterval(printHello,2000);