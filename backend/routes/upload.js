import express from "express"
import { addAccount } from "../controllers/upload.js"

const router = express.Router()

router.get("/",(req,res)=>{
    console.log("at Home");
    return res.json("You are at home via upload route")
})

router.post("/add", addAccount)

export default router