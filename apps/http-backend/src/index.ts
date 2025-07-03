import express from 'express'
import { PORT } from '@repo/common-backend/src/config'

const app = express()

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})