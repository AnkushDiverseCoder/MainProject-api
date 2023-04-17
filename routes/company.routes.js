import express from "express";
import { AddCompany, DeleteCompany, PutCompany } from "../controller/company/company.crud.controller.js";
import { CustomerNames, companyData, companyId, workPlaceName } from "../controller/company/company.utility.controller.js";
import { companyReport } from "../controller/company/company.report.controller.js";

const router = express.Router();

// Crud Rest Api
router.post("/add", AddCompany);
router.put("/update/:id",PutCompany );
router.delete("/delete/:id", DeleteCompany);

// Utility Routes 
router.get("/getName", CustomerNames);
router.post("/getWorkPlaceName", workPlaceName);
router.post("/Id", companyId);
router.post("/modifyData", companyData);

// Report
router.post("/getData", companyReport);

export default router;