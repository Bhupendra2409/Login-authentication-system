const express = require('express')
const socketio= require('socket.io')
const http = require('http');
const cors = require('cors');
const router = require('./router');

const {addUser,removeUser,getUser,getUserInRoom} = require('./users');

const port = process.env.PORT || 5000;



const app = express();

app.use(cors({
    origin:"*"
}));

app.use(router);


const server = http.createServer(app);
const io = socketio(server,{
    cors:{
        origin:'*',
    }
});

io.on('connection',(socket)=>{
    socket.on('join',({name,room},callback)=>{
        console.log(name,room);
        const {error,user} = addUser({id:socket.id,name: name,room: room});
        if(error) return callback(error);
        if(user){
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the room`})
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined!`});
        socket.join(user.room);
        callback();
        }
    });
    socket.on('sendMessage',(message,callback)=>{
        const user= getUser(socket.id);
        io.to(user.room).emit('message',{user:user.name,text: message })
        return callback();
    })
    socket.on('disconnect',()=>{
        const user= getUser(socket.id);
        if(user){
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has left!`});
        removeUser(socket.id);
        }
        console.log('user left');
        
        
    })
})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
