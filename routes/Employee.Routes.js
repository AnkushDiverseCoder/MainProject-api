import express from "express";
import { AddEmployee } from "../controller/employee/employee.controller.js";

const router = express.Router();

// Crud Rest Api
router.post("/add", AddEmployee);
router.put("/update/:id", );
router.delete("/delete/:id", );


export default router;