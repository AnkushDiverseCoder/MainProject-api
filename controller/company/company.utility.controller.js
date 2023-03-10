import { Company } from "../../model/company/company.model.js";

export const CustomerNames = async (req, res) => {
    try {
        const Name = await Company.aggregate([
            {
              $group: { _id: "$companyName" },
            },
          ]);
        res.status(201).json({msg:Name,status:true});
    } catch (error) {
        res.status(201).json({msg:error.message,status:false});
    }
}


export const workPlaceName = async (req, res) => {
    try {
        const placeName = await Company.aggregate([
            {
              $group: { _id: "$workPlaceName" },
            },
          ]);
        res.status(201).json({msg:placeName,status:true});
    } catch (error) {
        res.status(201).json({msg:error.message,status:false});
    }
}


export const companyId = async (req, res) => {
    try {
        const id = await Company.findOne({companyName:req.body.companyName,workPlaceName:req.body.workPlaceName})
        
        res.status(201).json({msg:id._id,status:true});
    } catch (error) {
        res.status(201).json({msg:error.message,status:false});
    }
}

