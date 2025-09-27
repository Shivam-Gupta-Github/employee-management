import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employee.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use(errorHandler);

export default app;
