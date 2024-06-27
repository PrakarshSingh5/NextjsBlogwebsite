import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

const connection={};
export const connectToDb=async()=>{
    try{
        if(connection.isConnected){
            console.log("Using existing connection");
            return ;
        }
        const db=await mongoose.connect(process.env.MONG_URL);
        connection.isConnected=db.connections[0].readyState;
    
        
    }catch(error){
     console.log(error);
     throw new Error(error);
    }
};