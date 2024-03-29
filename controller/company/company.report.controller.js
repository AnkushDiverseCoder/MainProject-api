import { Company } from "../../model/company/company.model.js";

//  Cusomter Company Report 
export const companyReport = async (req, res) => {
    try {
      const { customerName, workPlaceName } = req.body;
      if (!customerName && !workPlaceName) {
        return res.status(201).json({ msg: "Please Enter The Company Name and Employee Name", status: false });
      }
      const employeeData = await Company.find({ customerName, workPlaceName });
      return res.status(201).json({ msg: employeeData, status: true });
    } catch (error) {
      return res.status(201).json({ msg: error.message, status: false });
    }
  };

