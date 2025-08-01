"use client"
import axios from 'axios'

export default async function GetAllShapes () {
    const res = await axios.post("http://localhost:3001/api/v1/room/getShape", {})
    return res.data
}