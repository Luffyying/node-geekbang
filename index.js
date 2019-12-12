//node 异步编程 非阻塞 io
function interview(callback){
    setTimeout(() => {
        if(Math.random() < 0.2){
            callback('success')
        }else {
            callback(new Error('ss'))
        }
    }, 500);
}
// try{
//     console.log('====');
//     interview(function(item){
//         console.log(item)
//         console.log('smile');
//     })
// } catch(e){
//     console.log('--error le')
//     console.log(e)
// }
//在node中，一旦出错就是程序崩溃，和网页出错不同，这和调用栈有关
//node callback的参数，错误在第一位
//异步并发 async.js npm 
interview(function(item){
    if(item === 'success'){
        console.log(item);
    }else {
        console.log('抛出错误啦')
    }
})