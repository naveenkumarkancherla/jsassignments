const http=require('http')
const fs = require('fs')
const { parse } = require('path')
const server =  http.createServer((req,res)=>{
    const url = req.url
    const method= req.method
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>My first node app</title></head>')
        res.write('<body><form action="/message" method="POST" ><input name="message"/><button type="submit">Submit</button></form></body>')
        res.write('</html')
        return res.end()
    }

    if(url==='/message' && method==="POST"){
       fs.writeFileSync('message.txt',"data arrived")
       res.statusCode=302 
       res.setHeader('location','/')
       return res.end();
      const body=[]
      req.on('data',(chunk)=>{body.push(chunk)})
      req.on('end',()=>{
        const parsedBody =  Buffer.concat(body).toString()
        const msg =  parsedBody.split('=')[1]
        fs.writeFile('message.txt',msg, err=>{console.log(err);
            res.statusCode=302 
            res.setHeader('location','/')
            return res.end();
        })
      })
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first node app</title></head>')
    res.write('<body><h1>Welcome to Express!</h1></body>')
    res.write('</html')
    return res.end()
})
server.listen(3000,()=>{
  console.log("server is running on port no 3000");
})