import mongoose from "mongoose";
import { additionalDetails } from "./employee.utility.model.js";

const employeeSchema = new mongoose.Schema(
  {
    //  Uan And Esi Number For the Duplicate Field
    employeeCode: {
      type: String,
    },
    companyName: {
      type: String,
    },
    workPlaceName: {
      type: String,
    },
    employeeName: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    dateOfJoining: {
      type: String,
    },
    designation: {
      type: String,
    },
    department: {
      type: String,
    },
    dateOfLeaving: {
      type: Date,
    },
    address: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    nomineeName: {
      type: String,
    },
    relationshipWithMember: {
      type: String,
    },
    familyParticular: [
      {
        name: {
          type: String,
        },
        dob: {
          type: Date,
        },
        relationship: {
          type: String,
        },
      },
    ],
    additionalDetails: additionalDetails,
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export { Employee };
