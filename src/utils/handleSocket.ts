import { Socket } from 'socket.io'

const handleSocket = (io: any) => {
    io.on('connection', (socket: Socket) => {
        console.log(`${socket.id} is connected!`)

        socket.on('chat message', (msg) => {
            console.log(`${socket.id} chat message:` + msg);
            io.emit(`${socket.id} chat message:`, msg);
          });
        
        socket.on('disconnect', () => {
            console.log(`${socket.id} is disconnceted!`)
        })
    })
}

export {
    handleSocket
}