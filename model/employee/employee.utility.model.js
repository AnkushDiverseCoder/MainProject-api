import mongoose from "mongoose";
export const additionalDetails = new mongoose.Schema({
  kycDetails: {
    aadharNumber: {
      type: String,
      required: true,
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
    otherDetails: {
      type: String,
    },
  },
  financialDetails: {
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
  },
  salaryDetails: {
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
    otherDetails: {
      type: String,
    },
  },
});