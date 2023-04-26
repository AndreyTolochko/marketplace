import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';


dotenv.config();

const app = express();


app.get('/', (req:Request, res:Response)=>{
        res.json({msg:'Hello everyone'});
})



app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT}`)
})