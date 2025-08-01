import prisma from "@repo/common-backend/src/db/db"

const PC = prisma

export default async function PushShapeDb (startX: number, startY: number, width: number, height: number) {
    await PC.shapes.create({
        data: {
            type: "rect",
            x: startX, 
            y: startY,
            width: width,
            height: height
        }
    })
}