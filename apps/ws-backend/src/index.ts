import { WebSocketServer } from "ws";
import { JWT_SECRET, WS_PORT } from '@repo/common-backend/src/config'
import jwt from 'jsonwebtoken'

const wss = new WebSocketServer({port: Number(WS_PORT)})

wss.on("connection", (socket, Request)=>{
    const getUrl = Request.url
    const queryParams = new URLSearchParams(getUrl?.split("?")[1])
    const token = queryParams.get("token")
    const decode = jwt.verify(token!, JWT_SECRET)

    if(!decode){
        socket.close()
        return;
    }

    socket.on("message", (data=>{
        socket.send("Pong")
    }))
})