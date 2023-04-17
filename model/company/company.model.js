import mongoose, { SchemaType } from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    companyCode: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
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
      required: true,
    },
    authorizedContactNumber: {
      type: String,
      required: true,
    },
    companyEmailId: {
      type: String,
      required: true,
    },
    panNumber: {
      type: String,
    },
    gstNumber: {
      type: String,
    },
    epfCodeNumber: {
      type: String,
      required: true,
    },
    esicCodeNumber: {
      type: String,
      required: true,
    },
    professionalTax: {
      type: String,
    },
    tanNumber: {
      type: String,
    },
    workPlaceName: {
      type: String,
      required: true,
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
