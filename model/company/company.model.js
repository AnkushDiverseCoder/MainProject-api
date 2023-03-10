import mongoose, { SchemaType } from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    companyCode: String,
    companyName: String,
    companyAddress: String,
    state: String,
    district: String,
    authorizedPersonName: String,
    authorizedContactNumber: String,
    companyEmailId: String,
    panNumber: String,
    gstNumber: String,
    epfCodeNumber: String,
    esicCodeNumber: String,
    professionalTax: String,
    tanNumber: String,
    workPlaceName: String,
    serviceProvide: {
      type: String,
      enum: ['With Register', 'Without Register'],
    },
    dateOfCommencement: {
      type: Date,
    },
    licenceNumber: String,
    epfRegionalName: String,
    esicRegionalName: String,
    natureOfBusiness: String,
    professionalFees: {
      type: Number,
    },
    employee: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", CompanySchema);

export { Company };
