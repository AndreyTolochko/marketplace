import mongoose from "mongoose";

//basic model scheme for advert

const Schema = mongoose.Schema;

//model scheme with photos
const advertSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    photos: {type: Array, required: true}
})

//define model
export default mongoose.model('Advert',advertSchema);
