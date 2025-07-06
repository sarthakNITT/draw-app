"use client"
import { useEffect, useRef } from "react"
import DrawLogic from "./drawLogic"

export default function CanvasScreen () {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(()=>{
        if(canvasRef.current){
            DrawLogic(canvasRef)
        }
    },[canvasRef])
    return (
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} ></canvas>
        </div>
    )
}