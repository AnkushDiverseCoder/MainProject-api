import mongoose from "mongoose";

const kycSchema = new mongoose.Schema({
  aadharNumber: {type:String, required:true},
  nameAsPerAadhar: String,
  dateOfBirthAsPerAadhar: String,
  panNumber: String,
  mobileNumber: String,
  otherDetailsIfAny: [String],
});
const financialDetailsSchema = new mongoose.Schema({
  bankName: String,
  bankBranch: String,
  accountNumber: Number,
  ifscCode: String,
  calculation:{
    type: String,
    enum: ['Daily Wages', 'Monthly Salary'],
  },
  ifMonthlyWages: {
    type: String,
    enum: ['Monthly Days', 'Weekly Days'],
  },
  ifWeeklyRest: {
    type: String,
    enum: ['Every Sunday', 'Manual Define','Rotation Basic'],
  },
});
const SalarySchema = new mongoose.Schema({
  epfMemberId: String,
  uanNumber: String,
  esicIpNumber: String,
  bonusApplicable: String,
  gratuityApplicable: String,
  otherDetailsIfAny: [String],
});

const employeeSchema = new mongoose.Schema(
  {
    //  Uan And Esic Number For the Duplicate Feild
    employeeCode: { type: String },
    employeeName: { type: String },
    fatherName: { type: String },
    dateOfBirth: Date,
    gender: { type: String },
    maritalStatus: { type: String },
    dateOfJoining: { type: String },
    designation: { type: String },
    department: { type: String },
    dateOfLeaving: Date,
    address: { type: String },
    contactNumber: { type: String },
    email: { type: String },
    NomineeName: { type: String },
    relationshipWithMembership: { type: String },
    familyParticular: [
      {
        name: { type: String },
        dob: Date,
        relationship: { type: String },
      },
    ],
    kycDetails: kycSchema,
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export { Employee };
