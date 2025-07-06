import { NextRequest, NextResponse } from "next/server";
import {SignUpSchema} from "@repo/common-backend/src/validation"
import prisma from '../../../db/db'
import bcrypt from 'bcrypt'

const PC = prisma()

export default async function POST (req: NextRequest) {
    try {
        const data = await req.json()
        const check = SignUpSchema.safeParse(data)
        if(!check.success){
            console.log(check.error);
            return NextResponse.json({
                status: "failed",
                message: check.error
            })
        }
        if(check.data.password != check.data.confirmPassword){
            console.log(`Password does not match`);
            return NextResponse.json({
                status: "failed",
                message: "Password does not match"
            })
        }
        const hashedPass = await bcrypt.hash(check.data.password, 10)
        const checkExistingUser = await PC.user.findFirst({
            where: {
                username: check.data.username
            }
        })
        if(checkExistingUser){
            console.log(`User with this username already exists`);
            return NextResponse.json({
                status: "failed",
                message: "User with this username already exists"
            })
        }
        await PC.user.create({
            data: {
                username: check.data.username,
                password: hashedPass,
                email: check.data.email
            }
        })
        return NextResponse.json({
            status: "success",
            message: "User created successfully"
        })
        
    } catch (error) {
        console.log(`Error from userAuth route: ${error}`);
        return NextResponse.json({
            status: "failed",
            message: error
        })
    }
}