import express from "express";
import multer from "multer";
import { uploadCompanyData, uploadEmployeeData } from "../controller/user/user.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./")
  },
  fileName:(req,file,cb)=>{
    cb(null,file.name)
  }
})

const upload = multer({storage})

router.post("/uploadEmployeeData",upload.single('csvFile'),uploadEmployeeData)
router.post("/uploadCompanyData",upload.single('csvFile'),uploadCompanyData)

export default router;