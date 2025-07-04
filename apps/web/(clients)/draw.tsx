"use client"
import { SessionProvider, useSession } from "next-auth/react"
import { notFound } from "next/navigation"
import CanvasScreen from "./draw_menu/canvasScreen"

function DrawMenu () {
    const session = useSession()
    if(session.status==="authenticated"){
        return (
            <CanvasScreen/>
        )
    }else if(session.status==="unauthenticated"){
        notFound()
    }
}

export default function App () {
    return (
        <SessionProvider>
            <DrawMenu/>
        </SessionProvider>
    )
}