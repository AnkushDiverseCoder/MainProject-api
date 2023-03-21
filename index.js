import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//  Routes 
import authRoute from "./routes/auth.routes.js";
import companyRoute from "./routes/company.routes.js";
import employeeRoute from "./routes/Employee.Routes.js";


const app = express();
app.use(express.json());
dotenv.config();

// Db Connection 
mongoose.set("strictQuery", true);
const connect = async () => {
	try {
		mongoose.connect(process.env.MONGO);
		console.log("Connected to mongoDB!");
	} catch (error) {
		console.log(error);
	}
};

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes 
app.use("/api/auth", authRoute);
app.use("/api/company", companyRoute);
app.use("/api/employee", employeeRoute);

// Error Message
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

// Server Listing 
app.listen(process.env.PORT, () => {
  connect();
  console.log("Backend server is running!");
});
