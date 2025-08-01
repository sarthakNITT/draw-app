import express from 'express'
// import { HTTP_PORT } from '@repo/common-backend/src/config'
import cors from "cors"
import userRoute from './routes/userRoutes';
import roomRoute from './routes/roomRoutes';
const HTTP_PORT = 3001

const app = express()
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/room", roomRoute);

app.listen(HTTP_PORT, ()=>{
    console.log(`Server running on port: ${HTTP_PORT}`);
})