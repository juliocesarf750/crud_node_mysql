import { pool } from "../db.js";



export const getTasks = (req , res) =>{
    res.send('obteniendo todas las tareas');
}


export const getTask = (req , res) =>{
    res.send('obteniendo una tarea');
}


export const createTask = async(req , res) =>{
    //req.body resibe datos desde el body
    console.log(req.body);
    
    //obtengo los valores de req.body
    const {title,descripcion} = req.body;

    //sintaxis mysql insertando datos a la tabla tasks
    const [result] = await pool.query(
        "INSERT INTO tasks(title, descripcion) values (?,?)",
        [title,descripcion]
            
        
    );
    console.log(result);

    res.json({id:result.insertId,title,descripcion,});
}


export const updateTask = ( req , res) =>{
    res.send('actualizando tareas');
}


export const deleteTask = (req, res) => {
    res.send('eliminado tareas');
}

