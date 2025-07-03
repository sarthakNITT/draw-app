import express from "express"
import { LoginController, RegisterController } from "../../controllers/userControllers"
const userRoute = express.Router()

userRoute.post("/register", RegisterController)
userRoute.post("/login", LoginController)

export default userRoute