const connectDB = require("./server.js");

connectDB();

require("dotenv").config();
const port = process.env.PORT ;
const express =  require('express');
const app = express();
const cors = require("cors")
app.use(express.json());

app.use(cors({origin:'*'}));

app.get("/",(req,res)=>[
    res.send("this is home page")
])


app.use("/api", require("./router/Auth.router/auth.router.js")) // auth api----done
app.use("/api",require("./router/admin.router/admin.router.js"))// admin api---- done
app.use("/api",require("./router/client.router/client.router.js"))// client api---- 
app.use("/api",require("./router/supervisor.router/supervisor.router.js"))  //supervisor api---- done 

app.use((req, res, next) => {
  console.log('DEBUG: Incoming request:', req.method, req.originalUrl);
  next();
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})