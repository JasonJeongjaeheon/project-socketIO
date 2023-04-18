import config from './configs/environment'
import app from './app'
import appDataSource from './dataSource'

import { createServer } from 'http'
import { Server } from 'socket.io'
import { handleSocket } from './utils/handleSocket'

const setServer = async(): Promise<void> => {
    const PORT = config.port

    appDataSource
        .then(() => {
            console.log("Data Source has been initialized")
        })
        .catch(() => {
            console.log("Error: Data Source initialization has been failed")
        })

        app.listen(PORT, () => {
            console.log(`Listening on Port ${PORT}`)
        })

    const httpServer = createServer()
    const io = new Server(httpServer)
        
    handleSocket(io)
    
    httpServer.listen(3000, () => {
        console.log(`Socket sever listening on 3000`)
    })
}

setServer()
