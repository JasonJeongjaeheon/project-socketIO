import { Socket } from 'socket.io'

const handleSocket = (io: any) => {
    io.on('connection', (socket: Socket) => {
        console.log(`${socket.id} is connected!`)

        socket.emit('message', 'Welcome to my chat app!');
        
        socket.on('chat message', (msg, callback) => {
            console.log(`chat message:` + msg);
            socket.to(`${socket.id}`).emit('new chat', msg)
            socket.broadcast.emit('receive message', msg)
          });
        
        socket.on('disconnect', () => {
            console.log(`${socket.id} is disconnceted!`)
        })
    })
}

export {
    handleSocket
}