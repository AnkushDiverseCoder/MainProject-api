import mongoose from "mongoose";

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
    fatherName: {
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
    },
    calculation: {
      type: String,
    },
    wagesRate: [
      {
        heads: {
          type: String,
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
    },
    esicIpNumber: {
      type: String,
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
