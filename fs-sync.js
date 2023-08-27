//const path=require('path')
//console.log(path.sep)

//const filePath=path.join('/content','subfolder','text.txt')
//console.log(filePath)

//const base=path.basename(filePath)
//console.log(base)

//const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
//console.log(absolute)



//const {readFileSync}=require('fs');
//const fs=require('fs');
//fs.read
const { readFileSync, writeFileSync}= require('fs')
 console.log('start')
const first= readFileSync('./content/subfolder/first.txt','utf8');
const second= readFileSync('./content/subfolder/second.txt','utf8');
//console.log(first,second)
//writeFileSync('./content/subfolder/third.txt',`here is the result:${first},${second}`)
writeFileSync('./content/subfolder/third.txt',`here is the result:${first},${second}`,{flag:'a'})

console.log('done with this task')
console.log('starting the next one')

