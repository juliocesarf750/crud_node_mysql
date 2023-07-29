
import express from "express";
import{PORT}  from "./config.js";
import indexRoutes from './routes/index.routes.js'
import taskRouters from './routes/task.routes.js'
import cors from "cors";


const app = express();

//con esta libreria puedes obtener acceso al servidor desde el front
app.use(cors());

//para recibir datos desde body
app.use(express.json());

app.use(indexRoutes);
app.use(taskRouters);


app.listen(PORT);
console.log(`server is runnig on port ${PORT} `);