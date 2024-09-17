import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static('public'))
app.use(cookieParser());
import userrouter from './src/Routes/User.routes.js'
app.use('/api/v1/users',userrouter)


export {app}