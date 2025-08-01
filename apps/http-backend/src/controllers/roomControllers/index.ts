import { RoomSchema } from "@repo/common-backend/src/validation";
import { Request, Response } from "express";
import prisma from "@repo/common-backend/src/db/db"
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/common-backend/src/config";

const PC = prisma

export const CreateRoom = async (req: Request, res: Response) => {
    try {
        const data = RoomSchema.safeParse(req.body)
        
        if(!data.success){
            console.log(`Error from zod Validation in LoginController: ${data.error}`);
            res.status(403).json({
                status: "failed",
                message: data.error
            })
            return
        }
        
    } catch (error) {
        console.log(`Error from CreateRoomController: ${error}`);
        res.status(403).json({
            status: "failed",
            message: error
        })
        return  
    }
}

export const Shape = async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        const user = await PC.user.findFirst({
            where: {
                username: name
            }
        })
        if(!user){
            console.log("User not found");
            res.json({
                status: "failed",
                message: "User not found"
            })
        }
        const shapes = await PC.shapes.findMany({
            where: {
                userID: user.id
            }
        })
        res.json({
            status: "success",
            message: shapes
        })
    } catch (error) {
        console.log(`error from get Shape: ${error}`);
        res.json({
            status: "failed",
            message: error
        })
    }
}