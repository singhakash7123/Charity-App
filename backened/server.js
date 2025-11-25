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
// Create Razorpay instance
// export const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// Temporary route (you already had this)
app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});

// We will add payment routes here step-by-step

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 5000}`);
});
