import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import {router} from './routes/adRoutes'

dotenv.config();

const app = express();


app.use('/api/adverts', router)



//connect to mongodb using credentials from env file and if success listen for requests
mongoose.connect(process.env.MONGO_URI,
     {
        dbName:process.env.MONGO_DB,
        user:process.env.MONGO_USER,
        pass:process.env.MONGO_PASS
    }).then(()=>{
        app.listen(process.env.PORT, () => {
            console.log(`app running on ${process.env.PORT}`);
        })
    }).catch(error=>{
        console.log(error);
    });