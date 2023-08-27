//common js,every file is module(by default)
//const john='john'
//const peter='peter'
//const sayHi=(name)=>{
    //console.log(`hello there ${name}`);
//}

const names= require('./2-module')
const sayHi=require('./3-module')
const data=require('./alternativeModule')
require('./2-alternativeModule')
console.log(data)
//console.log(names)
//sayHi("divya")
//sayHi(names.john)
//sayHi(names.peter)