
import express from "express";
import{PORT}  from "./config.js";
import indexRoutes from './routes/index.routes.js'
import taskRouters from './routes/task.routes.js'


const app = express();


app.use(indexRoutes)
app.use(taskRouters)
app.listen(PORT)
console.log(`server is runnig on port ${PORT} `);