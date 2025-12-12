const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/admins", require("./routes/admins"));
//app.use("/donors", require("./routes/donors"));
app.use("/volunteers", require("./routes/volunteers"));
app.use("/donation", require("./routes/donation"));
app.use("/collection", require("./routes/donation_collection"));
app.use("/collecteditems", require("./routes/donation_collected_items"));
app.use("/tracking", require("./routes/donation_tracking"));
app.use("/payment", require("./routes/payment_donation"));

app.listen(5000, () => console.log("Server running on port 5000"));
