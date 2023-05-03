import mongoose from "mongoose";



export const connectDb = async() => {

    mongoose.set("strictQuery", false);
    let mongoUri = `${process.env.DATABASE_URL}`
    await mongoose.connect(mongoUri);

    console.log(`dataBase is connected to ${mongoUri} `);
}
