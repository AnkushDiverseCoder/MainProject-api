import { Employee } from "../../model/employee/employee.model.js";

// Get all Employee Data
export const getAllEmployee = async (req, res) => {
    try {
      const { customerName, workPlaceName } = req.body;
      if (!customerName && !workPlaceName) {
        return res.status(201).json({ msg: "Please Enter The Company Name and Employee Name", status: false });
      }
      const employeeData = await Employee.find({ customerName, workPlaceName });
      return res.status(201).json({ msg: employeeData, status: true });
    } catch (error) {
      return res.status(201).json({ msg: error.message, status: false });
    }
};

