import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nikkitabhardwaj:Hello@cluster0.pwoc2dp.mongodb.net/food-delievery').then(()=>console.log("DB Connected"));
}