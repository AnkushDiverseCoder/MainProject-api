import { Employee } from "../../model/employee/employee.model.js";

export const employeeNames = async (req, res) => {
    try {
        const Name = await Employee.aggregate([
            {
                $match: { companyName: req.body.companyName,workPlaceName: req.body.workPlaceName }
            },
            {
              $group: {
                 _id: {"id":"$_id","employeeName":"$employeeName"},
                 
             },
            },
          ]);
        res.status(201).json({msg:Name,status:true});
    } catch (error) {
        res.status(201).json({msg:error.message,status:false});
    }
}
