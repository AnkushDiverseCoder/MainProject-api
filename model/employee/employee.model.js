import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    //  Uan And Esi Number For the Duplicate Field
    employeeCode: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
    },
    workPlaceName: {
      type: String,
      required: true,
    },
    employeeName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    maritalStatus: {
      type: String,
    },
    dateOfJoining: {
      type: String,
      required: true,
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
      required: true,
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
    aadharNumber: {
      type: String,
    },
    nameAsPerAadhar: {
      type: String,
    },
    dateOfBirthAsPerAadhar: {
      type: String,
    },
    panNumber: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    kycOtherDetails: {
      type: String,
    },
    bankName: {
      type: String,
    },
    bankBranch: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    ifscCode: {
      type: String,
    },
    
    rest: {
      type: String,
      required: true,
    },
    calculation: {
      type: String,
      required: true,
    },
    wagesRate: [
      {
        heads: {
          type: String,
          required: true,
        },
        rates: {
          type: Number,
        },
        define: {
          type: String,
        },
      },
    ],
    epfMemberId: {
      type: String,
    },
    uanNumber: {
      type: String,
      required: true,
    },
    esicIpNumber: {
      type: String,
      required: true,
    },
    bonusApplicable: {
      type: String,
    },
    gratuityApplicable: {
      type: String,
    },
    complianceOtherDetails: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export { Employee };
