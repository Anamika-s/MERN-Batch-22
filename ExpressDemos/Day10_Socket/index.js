const express = require("express");
const app =  express();
const http = require("http")
const server = http.createServer(app)

const {Server} = require("socket.io")
const io = new Server(server)

var count = 0;
  io.on('connection' , function(socket)
  {
  console.log("A new user connected");
  count++;
  io.emit('usrcnt', count);
  // socket.broadcast.emit('hi');
  socket.on('disconnect', function()
   {
     console.log("user disconnected");
     count--;
     io.emit('usrcnt', count);
  
  })
  
    socket.on('chat_message',(msg)=>
    {
      console.log('message :' + msg)
    })
 
  })

app.get("/", (req,res)=>
{
  res.sendFile(__dirname + '/index.html');
});


server.listen(3000, ()=>
{
  console.log("listening at 3000 port");
})
