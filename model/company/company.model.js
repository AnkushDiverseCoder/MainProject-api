import mongoose, { SchemaType } from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    companyCode: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    authorizedPersonName: {
      type: String,
    },
    authorizedContactNumber: {
      type: String,
    },
    companyEmailId: {
      type: String,
    },
    panNumber: {
      type: String,
    },
    gstNumber: {
      type: String,
    },
    epfCodeNumber: {
      type: String,
    },
    esicCodeNumber: {
      type: String,
    },
    professionalTax: {
      type: String,
    },
    tanNumber: {
      type: String,
    },
    workPlaceName: {
      type: String,
    },
    serviceProvide: {
      type: String
    },
    dateOfCommencement: {
      type: Date,
    },
    licenceNumber: {
      type: String,
    },
    epfRegionalName: {
      type: String,
    },
    esicRegionalName: {
      type: String,
    },
    natureOfBusiness: {
      type: String,
    },
    professionalFees: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", CompanySchema);

export { Company };
