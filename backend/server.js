import express from "express";
import dotenv from "dotenv"
dotenv.config();
import productRoutes from "./routes/productRoutes.js"
import userRoutes from './routes/userRoutes.js';
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("App is running...");
})

app.use("/api/products",productRoutes);
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running in the PORT: ${port} successfully`);
})