import express from 'express';
import {getAdverts,createAdvert,deleteAdvert,updateAdvert, getAdvert} from '../controllers/advertControllers'




export const router = express.Router();

//router for get all adverts
router.get('/', getAdverts);

//get single advert
router.get('/:id', getAdvert);
//create advert
router.post('/', createAdvert );
//router.post('/', createAdvert);

//delete advert
router.delete('/:id', deleteAdvert);

//update advert
router.patch('/:id', updateAdvert);