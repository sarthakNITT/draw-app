"use client"
import { useEffect, useRef } from "react"

export default function CanvasScreen () {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current
            const ctx = canvas.getContext("2d")

            if(!ctx){
                return
            }

            let clicked = false;
            let startX = 0;
            let startY = 0;

            canvas.addEventListener("mousedown", (e)=>{
                clicked = true;
                startX = e.clientX
                startY = e.clientY
            })

            canvas.addEventListener("mousemove", (e)=>{
                if(clicked){
                    const width = e.clientX - startX;
                    const height = e.clientY - startY;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.strokeRect(startX, startY, width, height)
                }
            })

            canvas.addEventListener("mouseup", (e)=>{
                clicked = false;
            })

        }
    },[canvasRef])
    return (
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} ></canvas>
        </div>
    )
}