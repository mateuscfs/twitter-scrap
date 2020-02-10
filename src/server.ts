import { Request, Response } from 'express'
import { camFeed } from './controllers/camScrapper'
import app from './app'

const server = app

server.get('/', (req: Request, res: Response) => {
    console.log(req)
    res.send('Bem-Vindo!')
})

server.get('/galo', async (req: Request, res: Response) => {
    const ret = await camFeed(req.body)
    return ret
})

export default server