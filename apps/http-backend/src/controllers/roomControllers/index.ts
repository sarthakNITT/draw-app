import { RoomSchema } from "@repo/common-backend/src/validation";
import { Request, Response } from "express";

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
