import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
// import Users from "./models/UserModel.js"; //hanya digunakan saat membuat tabel baru yang belum ada di mysql
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import cors from "cors";

dotenv.config();
const app = express();
try {
    await db.authenticate();
    console.log("Database conneted..");
    // await Users.sync(); //hanya digunakan saat membuat tabel baru yang belum ada di mysql
} catch (error) {
    console.log(error);
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('server runing at port 5000'));