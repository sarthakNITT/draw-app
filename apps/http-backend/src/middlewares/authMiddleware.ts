import { JWT_SECRET } from "@repo/common-backend/src/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

declare global {
    namespace Express {
      interface Request {
        userId?: Record<string,any>
      }
    }
}

export default async function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
    try {
        const getToken = req.headers["authorization"]
        const extractToken = getToken?.split(" ")[1]
        const decode = jwt.verify(extractToken!, JWT_SECRET) as JwtPayload
        if(decode){
            req.userId = decode.userId;
            next()
        }else{
            res.status(401).json({
                status: "failed",
                message: "Unauthorised"
            })
            return;
        }
    } catch (error) {
        console.log(`Error from AuthMiddleware: ${error}`);
        res.status(401).json({
            status: "failed",
            message: error
        })
        return;
    }
}