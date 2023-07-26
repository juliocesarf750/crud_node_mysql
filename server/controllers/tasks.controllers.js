


export const getTasks = (req , res) =>{
    res.send('obteniendo todas las tareas');
}


export const getTask = (req , res) =>{
    res.send('obteniendo una tarea');
}


export const createTask = (req , res) =>{
    res.send('creando tareas');
}


export const updateTask = ( req , res) =>{
    res.send('actualizando tareas');
}


export const deleteTask = (req, res) => {
    res.send('eliminado tareas');
}

