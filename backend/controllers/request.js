import {db} from "../db.js"

export const seeData = (req,res) =>{
    console.log("Displaying Driver info");
    /*
    const q = "SELECT * FROM driverinfo"

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })*/
   const q = "SELECT * FROM driverinfo"

   db.query(q,(err,data)=>{
    if(err) return res.status(500).json(err);
    res.status(200).json(data);
   })
}

export const deleteAcc = (req,res)=>{
    console.log("Deleting account");
    const userId = req.params.id;
    const q = "DELETE FROM driverinfo WHERE id = ?";

    db.query(q,[userId],(err,data)=>{
        if(err) return res.status(500).json(err);
        res.status(200).json({message:"User deleted successfully."})
    })
}

export const updateAcc = (req,res)=>{
    const {id} = req.params
    const values =[
        req.body.first_name,
        req.body.last_name,
        req.body.id_number,
        req.body.phone_number,
        req.body.email,
        req.body.occupation,
        req.body.department,
        req.body.user_picture,
        req.body.plate_number,
        req.body.motor_color,
        req.body.motor_brand,
        req.body.motor_series,
        id
    ]

     const q = "UPDATE driverinfo SET first_name = ?, last_name = ?,id_number = ?, phone_number = ?, email = ?, occupation = ?, department = ?, user_picture = ?, plate_number = ?, motor_color = ?, motor_brand = ?, motor_series = ? WHERE id = ?"

     db.query(q,values, (err,data) =>{
        if(err) return res.status(500).json(err);
        res.send({message:"Driver info updated successfully!"});
     })
}