//console 方法实例如下：
//import { platform } from "os";

//console.info('程序开始执行:');
//var counter=10;
//console.log('计数：%d',counter);
//console.time('获取数据');

//console.timeEnd('获取数据');
//console.info('程序执行完毕');



//Process 属性实例如下:
process.stdout.write('Hello World!'+'\n');

process.argv.forEach(function(val,index,array){
    console.log(index+':'+val);
});

console.log(process.execPath);

console.log(process.platform);