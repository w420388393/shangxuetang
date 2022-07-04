//var fs = require('fs')

//读取文件
async function readFile(){
    await fs.readFile('D:/data.txt','utf8',(err, datastr) => {
        if (err) throw err;
        console.log('data:'+datastr);
    })
}

//写入文件
function writeFile(){
    return new Promise((resolve,reject)=>{
        fs.writeFile('D:/test.txt','表头号码',(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("写入成功");
        })
    })
}

async function writeFile1(){
    await fs.writeFile('D:/test.txt','表头号码',(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("写入成功");
        })
        
    
}

function writeFileAsyc(){
    fs.writeFileSync('D:/test.txt','姓名                    年龄                    手机号                    账号                    金额                    ')
    console.log("写入成功");
}

//追加文件
function appendFile(data){
    return new Promise((resolve,reject)=>{
        fs.appendFile('D:/test.txt','\n'+data,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("追加成功");
        })
    })
}




async function fileOpr(){
   
    const  fs = require('fs')
    //读文件
    await fs.readFile('D:/data.txt','utf8',(err, datastr) => {
        if (err) throw err;
        console.log('data:'+datastr);

        //把读取的文件按逗号分隔
        var arrOld = datastr.split(',')
        // console.log(arrOld);
        const arrNew = []
        // arrOld.forEach(item=>{
        //     arrNew.push(item)
        // })
        // console.log("===arrNew===",arrNew);
       // 循环读取每行的元素
        for(let i in arrOld){
           //console.log(arrOld[i]); 
           //对每个字段进行补齐，存在arrNew里
           arrNew[i] =  arrOld[i].padEnd(20);
           console.log(arrNew[i]+ '的长度',arrNew[i].length); 
        }

        //把ArrNew里的元素转为字符串
        var newStr = arrNew.join('')
        newStr = '\n' + newStr
        console.log(newStr);
        //新建test.txt文件并写入表头
        fs.writeFileSync('D:/test.txt','姓名                  年龄                  手机号                 账号                            金额                  ')
        // 将要写入的内容追加到test.txt
        fs.appendFile('D:/test.txt',newStr,err=>{
            if(err){
                return console.log("===error===",err);
            }
            
        })

    })
    
}

async function main(){
    //console.log("hello world");
    //writeFileAsyc;
   // console.log("hello world");
    //console.log(writeFile1().then()); 
    //console.log(msg);
    //console.log("txt:::"+readFile().txt); 
    //writeFileAsyc()
     //console.log("hello world");
     //appendFile(msg)
     fileOpr()
    
    

}
main();