import {db} from "../db.js"

export const addAccount = (req,res) =>{
    //check users
    const q = "SELECT * FROM driverinfo WHERE first_name = ? AND last_name = ?"
    db.query(q,[req.body.first_name,req.body.last_name],(err,data) =>{
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("user already exist.");

        const q = "INSERT INTO driverinfo(`first_name`,`last_name`,`id_number`,`phone_number`,`email`,`occupation`,`department`,`user_picture`,`plate_number`,`motor_color`,`motor_brand`,`motor_series`) VALUES (?)"
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
            req.body.motor_series
        ]

        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            db.commit();
            return res.status(200).json("User has been created.");
        });
    });
}