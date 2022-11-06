import Tarea from "../models/tarea"

export const listarTareas = async(req, res)=>{
    try {
        const listaTareas = await Tarea.find();
        res.status(200).json(listaTareas)
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: "error al intentar buscar la tarea"})
    }
  
}

export const crearTarea = async(req,res)=>{
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({ mensaje: "la tarea fue creada correctamente"})
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: "error al intentar agregar una tarea"})
    }
}

export const obtenerTarea = async (req,res)=>{
    try{
        console.log(req.params.id)
        const tareaBuscada = await Tarea.findById(req.params.id);
        res.status(200).json(tareaBuscada);
    } catch (error){
        console.log(error)
        res.status(404).json({
            mensaje: "error, no se pudo encontrar la tarea buscada"
        })
    }
}

export const editarTarea = async (req,res)=>{
    try{
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: "la tarea fue editada correctamente"})
    } catch (error){
        console.log(error)
        res.status(404).json({
            mensaje: "error, no se pudo modificar la tarea"
        })
    }
}

export const borrarTarea = async (req,res)=>{
    try{
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "la tarea fue borrada correctamente"})
    } catch (error){
        console.log(error)
        res.status(404).json({
            mensaje: "error, no se pudo borrar la tarea"
        })
    }
}