import { Company } from "../../model/company/company.model.js";
import { Employee } from "../../model/employee/employee.model.js";

// Routes
// Create a new customer
export const AddEmployee = async (req, res, next) => {
    try {
        const newEmployee = new Employee(req.body);
        const updatedCompany = await Company.findByIdAndUpdate(req.params.companyId,{ $push: { employee: newEmployee._id } },{new:true});
        await newEmployee.save();
        res.status(201).send({newEmployee ,updatedCompany , msg:"Successfully added New Employee !!! "});
      } catch (error) {
        res.status(400).json({ error: error.message });
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
  export const PutCompany = async (req, res, next) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!company) {
          return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(company);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  };
  
  // Delete a customer by ID
  export const DeleteCompany = async (req, res, next) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {
          return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(company);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };