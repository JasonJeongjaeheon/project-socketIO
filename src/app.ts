import dotenv from 'dotenv'
dotenv.config()

import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { routes } from './routes/index'

class App {
    public app: Application

    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    private config(): void {
        this.app.use(cors())
        this.app.use(morgan('tiny'))
        this.app.use(express.json())
    }

    private routes(): void {
        this.app.get('/ping', (req: Request, res: Response) => {
            res.status(200).json({message: 'pong'})
        })
        this.app.use(routes)
    }
}

export default new App().app
