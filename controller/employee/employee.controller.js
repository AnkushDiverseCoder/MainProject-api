import { Employee } from "../../model/employee/employee.model.js";

// Routes
// Create a new customer
export const AddEmployee = async (req, res) => {
  try {
    const { customerName, workPlaceName } = req.body;
    if (!customerName && !workPlaceName) {
      return res.status(201).json({ msg: "Please Select Company In the Dashboard", status: false });
    }
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    return res.status(201).json({ msg: "Successfully added New Employee!!! ", status: true });
  } catch (error) {
    return res.status(201).json({ msg: error.message, status: false });
  }
};

// Get all Employee Name
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

//   Get a specific customer by ID
export const getSingleEmployee = async (req, res) => {
  try {
    const employeeData = await Employee.findOne({ _id: req.params._id })
    return res.status(201).json({ msg: employeeData, status: true });
  } catch (error) {
    return res.status(201).json({ msg: error.message, status: false });
  }
};
// Update a Employee by ID
export const updateEmployee = async (req, res) => {
  try {
    const updatedCompany = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(() => {
      return res.status(404).json({ error: 'Customer not found' })
    }
    )
    return res.status(201).json({ msg: updatedCompany, status: true });
  } catch (error) {
    return res.status(201).json({ msg: updatedCompany, status: true });
  }
};

// Delete a customer by ID
export const deleteEmployee = async (req, res) => {
  try {
    const DeleteEmployee = await Employee.findByIdAndDelete(req.params.id).catch(() => {
      return res.status(404).json({ error: 'Customer not found' });
    })
    return res.status(201).json({ msg:"SucessFully Deleted Employee", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};