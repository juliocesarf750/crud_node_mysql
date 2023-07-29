import { pool } from "../db.js";



export const getTasks = async(req , res) =>{
    try{
        const [result] = await pool.query("select * from tasks order by createAt asc");
        res.json(result);
        
     
    }catch(ERROR){
        console.error(ERROR)
    }
   
}


export const getTask = async(req , res) =>{

   try{
        const [result] = await pool.query("select * from tasks where id = ?",[req.params.id,]);
        res.json(result[0])
        
   }catch(ERROR){
        console.log(ERROR);
   }
        
}


export const createTask = async(req , res) =>{

   try{
        //req.body resibe datos desde el body
        console.log(req.body);
        //obtengo los valores de req.body
        const {title,descripcion} = req.body;
        //sintaxis mysql insertando datos a la tabla tasks
        const [result] = await pool.query(
        "INSERT INTO tasks(title, descripcion) values (?,?)",[title,descripcion]);
        
        res.json({id:result.insertId,title,descripcion,});

   }catch(ERROR){

        console.error(ERROR);

   }

    
}


export const updateTask = async( req , res) =>{

    try{

        const {title, descripcion} = req.body;
        const [result] = await pool.query("update tasks set title = ? , descripcion = ? where id = ?",[title,descripcion,req.params.id,]);
        res.json(result[0]);
        

    }catch(ERROR){
        console.error(ERROR);
    }
 
    
}


export const deleteTask = async(req, res) => {
    
    try{
        const [result] = await pool.query("delete from tasks where id = ?",[req.params.id,]);
        res.json(result[0]);
    }catch(ERROR){
        console.error(ERROR);
    }
    
}

