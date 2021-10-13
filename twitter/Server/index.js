const express = require ('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');

const Port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);


io.on('connection',(socket)=>{
    console.log('new connection detected');
    socket.on('disconnect',()=>{
        console.log('user diconnect!!');
    })
})

server.listen(Port,()=>{
    console.log(`server is started on port hello ${Port} `);
})

