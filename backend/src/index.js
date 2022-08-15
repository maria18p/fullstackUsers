import express from 'express'
import cors from 'cors'
import bd from 'body-parser'
import route from "./routes/loginRoutes.js"
import { createConnection } from './database/connection.js'

const startServer = () => {
    const server = express()
    server_configs(server)
    createConnection();
    listen_on_port(server)
}



const server_configs = (server) => {
    server.use(cors());
    server.use(bd.urlencoded({extended: false}))
    server.use(bd.json())
    server.use('/', route)
}

const listen_on_port = (server) => {
    server.listen(
        (5000),
        () => {
            console.log("Listening on PORT 5000")
        })
}


startServer()