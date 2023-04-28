import Advert from "../models/advertModel"
import {Request, Response} from "express"




//get adverts
export const getAdverts =  async (req:Request, res:Response) =>{
    const adverts = await Advert.find({}).sort({createdAt:-1});
    res.status(200).json(adverts);
}
//get single advert
export const getAdvert = async (req:Request, res:Response) =>{
    const {id} = req.params;
    const advert = await Advert.findById(id);
    if(!advert){
        res.status(404).json({error:"advert not found"})
    }
    res.status(200).json(advert);
}

//delete advert
export const deleteAdvert = async (req:Request, res:Response) =>{
    const {id} = req.params;
    const advert = await Advert.findByIdAndDelete(id);
    if(!advert){
        res.status(404).json({error:"advert not found"})
    }
    res.status(200).json(advert);
}

//create advert with photo array from form data
export const createAdvert = async (req:Request, res:Response) =>{
    const {title, description, price, photos} = req.body;
    const advert = await Advert.create({title, description, price, photos});
    res.status(201).json(advert);
}

//update advert with photo array from form data
export const updateAdvert = async (req:Request, res:Response) =>{
    const {id} = req.params;
    if(!id){
        res.status(400).json({error:"id not found"})
    }
    const {title, description, price, photos} = req.body;
    const advert = await Advert.findByIdAndUpdate(id, {title, description, price, photos}, {new:true});
    res.status(200).json(advert);
}

