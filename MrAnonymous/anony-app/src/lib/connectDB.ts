import mongoose from "mongoose";

// Next.js will cache the connection object, so we can use it to check if we are already connected to the database
// Bcz Next.js works in edge case when data required to be fetched from the database, it will create a new instance of the server, so we need to check if we are already connected to the database or not
type connectionObj = {
    isConnected?: number;
}

const connection: connectionObj = {}
const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB(): Promise<void> {
    if(connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }

    if(!MONGODB_URI){
        throw new Error("DB Connection String not Found");
    }

    try{
        const db = await mongoose.connect(MONGODB_URI || "", {})
        connection.isConnected = db.connections[0].readyState;
    } catch(err){
        console.log("Error Occur: ", err);
        process.exit(1);
    }
}

export default connectDB;