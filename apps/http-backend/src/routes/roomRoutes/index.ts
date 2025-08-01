import express from "express"
import { CreateRoom, Shape } from "../../controllers/roomControllers"
import AuthMiddleware from "../../middlewares/authMiddleware"
const roomRoute = express.Router()

roomRoute.post("/create", AuthMiddleware, CreateRoom)
roomRoute.post("/getShape", AuthMiddleware, Shape)

export default roomRoute