import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import {JWT_SECRET} from "@repo/common-backend/src/config"

export async function GET (req: NextRequest) {
    const secret = JWT_SECRET
    const token = await getToken({req, secret})
    console.log(token);
    return NextResponse.json({
        message: token?.name
    })
}