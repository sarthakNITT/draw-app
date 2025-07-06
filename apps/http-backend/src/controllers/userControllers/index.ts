import { Request, Response } from "express";
import { SignInSchema, SignUpSchema } from '@repo/common-backend/src/validation'
export const RegisterController = async (req: Request, res: Response) => {
    try {
        const data = SignUpSchema.safeParse(req.body)
        
        if(!data.success){
            console.log(`Error from zod Validation in RegisterController: ${data.error}`);
            res.status(403).json({
                status: "failed",
                message: data.error
            })
            return
        }


    } catch (error) {
        console.log(`Error from RegisterController: ${error}`);
        res.status(403).json({
            status: "failed",
            message: error
        })
        return
    }
}

export const LoginController = async (req: Request, res: Response) => {
    try {
        const data = SignInSchema.safeParse(req.body)
        
        if(!data.success){
            console.log(`Error from zod Validation in LoginController: ${data.error}`);
            res.status(403).json({
                status: "failed",
                message: data.error
            })
            return
        }

        

    } catch (error) {
        console.log(`Error from LoginController: ${error}`);
        res.status(403).json({
            status: "failed",
            message: error
        })
        return       
    }
}