import mongoose from "mongoose";

const url = "mongodb+srv://DeepAbyss:ASDasd123@cluster0.xv2idv1.mongodb.net/tareas";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("Base de datos conectada")
})