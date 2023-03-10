import express from "express";
import { AddCompany, DeleteCompany, PutCompany } from "../controller/company/company.crud.controller.js";
import { CustomerNames, companyId, workPlaceName } from "../controller/company/company.utility.controller.js";

const router = express.Router();

// Crud Rest Api
router.post("/add", AddCompany);
router.put("/update/:id",PutCompany );
router.delete("/delete/:id", DeleteCompany);

// Utility Routes 
router.get("/getName", CustomerNames);
router.get("/getWorkPlaceName", workPlaceName);
router.post("/Id", companyId);

export default router;