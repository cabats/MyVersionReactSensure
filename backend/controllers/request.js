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

export const seeDriver = async (req,res)=>{
 
    try{
        const plateNumber = req.query.plate_number;

        if (!plateNumber) {
            return res.status(400).json({ message: "Plate number is required." });
        }

        const q = "SELECT first_name, last_name, id_number, occupation, department, user_picture, plate_number, motor_color, motor_brand, motor_series FROM driverinfo WHERE plate_number = ?";
        
        db.query(q,[plateNumber],(err,data)=>{
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Internal server error" });
            }

            if (data.length > 0) {
                res.json(data[0]); // Return first matching result
            } else {
                res.status(404).json({ message: "Driver not found." });
            }
        })

    }catch(err){
        console.error("Database error:", err);
        res.status(500).json({ message: "Unexpected error occurred." });
    }
}