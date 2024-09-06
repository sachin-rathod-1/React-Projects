const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(`<h1>Home Page</h1>`)
    }else  if(req.url=='/Contact'){
        res.end(`<h1>Contact Page</h1>`)
    } else{
        res.end(`<h1>Page not found</h1>`)
    }
})

server.listen(1995)