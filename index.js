import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import connectDb from "./mongodb/connect.js";
import PostRoutes from "./Routes/PostRoutes.js"
import  DalleRoute  from "./Routes/dalle.js";

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json({limit:"50mb"}));

app.use("/api/v1/post",PostRoutes)
app.use("/api/v1/dalle",DalleRoute)

    

const startServer=async()=>{
    try {
        connectDb(process.env.MONGODB_URL);
        app.listen(5000,()=>{
            console.log("server is running on port https://aiimage-backend.vercel.app")
        })
    } catch (error) {
        console.log(err)
    }
  
}
app.get("/",(req,res)=>{
    res.send(` <h1>Server is working <a href=${process.env.FRONTEND_URL}>click here</a> to enter the frontend part</h1>`)
   })
startServer();
