import { Employee } from "../../model/employee/employee.model.js";
import { Company } from "../../model/company/company.model.js";
import { unlink } from "node:fs/promises";
import csv from "csvtojson";

export const uploadEmployeeData = async (req, res, next) => {
  try {
    const jsonArrayOfData = await csv().fromFile(req.file.path);

    await Employee.insertMany(jsonArrayOfData);

    await unlink(`./${req.file.path.split("\\").pop()}`);

    res.status(200).json({
      status: true,
      msg: "Added SuccessFully",
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      msg: error.message,
    });
  }
};


export const uploadCompanyData = async (req, res, next) => {
  try {
    const jsonArrayOfData = await csv().fromFile(req.file.path);

    await Company.insertMany(jsonArrayOfData);

    await unlink(`./${req.file.path.split("\\").pop()}`);

    res.status(200).json({
      status: true,
      msg: "Added SuccessFully",
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      msg: error.message,
    });
  }
};
