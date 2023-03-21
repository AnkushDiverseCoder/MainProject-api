import { Employee } from "../../model/employee/employee.model.js";

// Routes
// Create a new customer
export const AddEmployee = async (req, res, next) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({msg:"Successfully added New Employee!!! ",status:true});
      } catch (error) {
        res.status(201).json({msg:error.message,status:false});
      }
  };
  
  // Get all customers
//   export const AddCompany = async (req, res, next) => {
//     try {
//       const customers = await Customer.find();
//       res.json(customers);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
  // Get a specific customer by ID
//   export const AddCompany = async (req, res, next) => {
//     try {
//       const customer = await Customer.findById(req.params.id);
//       if (!customer) {
//         return res.status(404).json({ error: 'Customer not found' });
//       }
//       res.json(customer);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
  // Update a customer by ID
  // export const PutCompany = async (req, res, next) => {
  //   try {
  //       const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  //       if (!company) {
  //         return res.status(404).json({ error: 'Customer not found' });
  //       }
  //       res.json(company);
  //     } catch (error) {
  //       res.status(400).json({ error: error.message });
  //     }
  // };
  
  // // Delete a customer by ID
  // export const DeleteCompany = async (req, res, next) => {
  //   try {
  //       const company = await Company.findByIdAndDelete(req.params.id);
  //       if (!company) {
  //         return res.status(404).json({ error: 'Customer not found' });
  //       }
  //       res.json(company);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }
  // };