const fs=require('fs')

//Reading data from file
const data=fs.readFileSync('main.txt','utf-8');
console.log(data)

fs.readFile('main.txt','utf-8',(e,d)=>{
    console.log(data)
})
//Writing into file
fs.writeFileSync('main.txt','Welcome to node js')
//append
// fs.appendFileSync('mains.txt','\n Its awesome')

//Delete
fs.unlinkSync('mains.txt')