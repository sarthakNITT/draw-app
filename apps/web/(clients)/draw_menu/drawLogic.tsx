import GetAllShapes from "./getAllShapes"
import PushShapeDb from "./pushShapeDb"
import ClearCanvas from "./storeShape"

export type store = {
    type: "rect",
    x: number,
    y: number,
    width: number,
    height: number
}

export default async function DrawLogic (canvasRef: any) {
    // const response = await GetAllShapes()
    // const existingShape: store[] = response.message
    const existingShape: store[] = [];
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    
    if(!ctx){
        return
    }
    ctx.fillStyle = "rgba(0, 0, 0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e: any)=>{
        clicked = true;
        startX = e.clientX
        startY = e.clientY
    })

    canvas.addEventListener("mousemove", (e: any)=>{
        if(clicked){
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            ClearCanvas(existingShape, canvas, ctx)
            ctx.strokeStyle = "rgba(255, 255, 255)"
            ctx.strokeRect(startX, startY, width, height)
        }
    })

    canvas.addEventListener("mouseup", (e: any)=>{
        clicked = false;
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        PushShapeDb(startX, startY, width, height)
    })
}

