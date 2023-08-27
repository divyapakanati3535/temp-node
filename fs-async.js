const { readFile, writeFile }=require('fs')
console.log('start')
readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
   // console.log(result)
   const first=result;
   readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
    if (err){
    console.log(err)
    return

   }
   const second =result

   writeFile('./content/third.txt',`here is the result of callback function:,${first},${second}`,(err,result)=>{
    if(err){
        console.log(err)
        return
     }
     console.log('done with this task')

   })
   

   })



})
console.log('starting the next task')





