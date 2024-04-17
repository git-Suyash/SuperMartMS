import Express from "express";
import router from "./routes.js";
import cors from "cors";



const app = Express();
const PORT = 4000;
app.use(cors());
const corsOption = {
    origin : 'http://localhost:3000' ,
    optionsSuccessStatus :200 
};

//middleware
app.use(Express.json());
app.use(router);
app.use(cors(corsOption));

app.listen(PORT,()=>{
    try{
        console.log(`Server is running on port ${PORT}`);
    }
    catch(error){
        console.error(error.message);
    }
});