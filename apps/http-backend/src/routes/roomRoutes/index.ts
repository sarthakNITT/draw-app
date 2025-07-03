import express from "express"
import { CreateRoom } from "../../controllers/roomControllers"
import AuthMiddleware from "../../middlewares/authMiddleware"
const roomRoute = express.Router()

roomRoute.post("/create", AuthMiddleware, CreateRoom)

export default roomRoute