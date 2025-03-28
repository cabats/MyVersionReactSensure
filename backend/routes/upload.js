import express from "express"
import { addAccount } from "../controllers/upload.js"
import multer from "multer";

const router = express.Router()


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/upload-image", upload.single("profileImage"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    const imagePath = `images/${req.file.filename}`;
    res.status(201).json({ imageUrl: imagePath });
  });

router.post("/add", addAccount)

export default router