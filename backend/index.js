import express from "express"
import mysql from "mysql"
import uploadRoutes from "./routes/upload.js"
import requestRoutes from "./routes/request.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/new",uploadRoutes)

app.use("/request",requestRoutes)

/*
db.connect((err)=>{
    if(err) {
        console.log("Database connection failed."+err.message)
    }
    else{
        console.log("Connected to SQL Database.")
    }
})
 */
/*app.get("/login",authRoutes)*/
/*app.get("/home",uploadRoutes)*/

/*
app.get("/driverinfo",(req,res)=>{
    const q = "SELECT * FROM driverinfo"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})*/

/*creating data to the sql table
app.post("/driverinfo",(req,res)=>{
    const q= "INSERT INTO driverinfo (first_name,last_name) VALUES (?)"
    const values = ["James Raily","Daitic"]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json("error in inserting data"+ err.message);
        return res.json(data);
    })
})*/ 
app.listen(8800, ()=>{
    console.log("Connected to the backend.")
})