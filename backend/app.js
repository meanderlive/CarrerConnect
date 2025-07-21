// import express from "express";
// import dbConnection from "./database/dbConnection.js";
// import jobRouter from "./routes/jobRoutes.js";
// import userRouter from "./routes/userRoutes.js";
// import applicationRouter from "./routes/applicationRoutes.js";
// import { config } from "dotenv";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";

// const app = express();

// // Load environment variables
// config({ path: "./config/config.env" });

// // CORS Setup
// app.use(cors());

// // Middleware
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// // Test route
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// // Routes
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/job", jobRouter);
// app.use("/api/v1/application", applicationRouter);

// // Database connection
// dbConnection();

// // Error middleware
// app.use(errorMiddleware);

// export default app;


import express from "express";
import dbConnection from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();

// Load environment variables
config({ path: "./config/config.env" });

// ✅ Correct CORS setup
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend's URL
    credentials: true, // required for cookies or auth headers
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// Database connection
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
