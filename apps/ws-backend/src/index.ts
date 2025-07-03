import { WebSocketServer } from "ws";
import { WS_PORT } from '@repo/common-backend/src/config'

const wss = new WebSocketServer({port: Number(WS_PORT)})

wss.on("connection", (socket)=>{
    socket.on("message", (data=>{
        socket.send("Pong")
    }))
})