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
  
  //   Get a specific customer by ID
export const getSingleEmployee = async (req, res) => {
    try {
      const employeeData = await Employee.findOne({ _id: req.params._id })
      return res.status(201).json({ msg: employeeData, status: true });
    } catch (error) {
      return res.status(201).json({ msg: error.message, status: false });
    }
  };