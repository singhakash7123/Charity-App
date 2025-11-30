import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import bodyParser from "body-parser";

import paymentRoutes from "./routes/paymentroutes.js";


dotenv.config();
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});



app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 5000}`);
});
