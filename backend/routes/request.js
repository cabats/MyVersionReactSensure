import express from "express"
import { deleteAcc, seeData,updateAcc } from "../controllers/request.js"

const router = express.Router()
router.get("/",(req,res)=>{
    console.log("FROM REQUEST SCRIPT")
})
router.get("/seedata",seeData)
router.delete("/delete/:id",deleteAcc)
router.put("/user/:id",updateAcc)
export default router