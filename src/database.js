import mongoose from "mongoose";

const url = "mongodb://localhost:27017/tp1BackEnd";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("Base de datos conectada")
})