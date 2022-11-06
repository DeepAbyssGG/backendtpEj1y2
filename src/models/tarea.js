import mongoose from "mongoose";
import { Schema } from "mongoose";

const tareaSchema = new Schema ({
    nombreTarea:{
        type: String,
        required: true,
        unique: true,
        mingLength: 5,
        maxLength: 300
    }
})

const Tarea = mongoose.model("tarea", tareaSchema)
export default Tarea