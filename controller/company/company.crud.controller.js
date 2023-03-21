import { Company } from "../../model/company/company.model.js";

// Routes
// Create a new customer
export const AddCompany = async (req, res) => {
    try {
        const { companyName , workPlaceName } = req.body;
        const exist = await Company.findOne({ companyName , workPlaceName });
        if(exist){       
            return res.status(200).json({msg:"Company With Same Name and WorksiteName Exist",status:false});
        }
        const newCompany = new Company(req.body);
        await newCompany.save();
        res.status(201).json({msg:"Successfully added New Company!!! ",status:true});
      } catch (error) {
        res.status(201).json({msg:error.message,status:false});
      }
  };
  
  // Get all customers
  export const getAllCompany = async (req, res) => {
    try {
      const AllCompany = await Company.find();
      res.json(getAllCompany);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
//   Get a specific customer by ID
  export const getOneCompany = async (req, res) => {
    try {
      const singleCompany = await Company.findById(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(singleCompany);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update a customer by ID
  export const PutCompany = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({msg:"Company Updated",status:true});
      } catch (error) {
        return res.status(200).json({msg:error.message,status:false});
      }
  };
  
  // Delete a customer by ID
  export const DeleteCompany = async (req, res) => {
    try {
        const deleteCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deleteCompany) {
          return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(deleteCompany);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };
  