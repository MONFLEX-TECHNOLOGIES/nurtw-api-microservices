// require("dotenv").config();
require("./connection/mongo.conn")()
const passengerRoutes = require("./passengers.routes")
const express = require("express")
const cors = require("cors");
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/v1/passengers", passengerRoutes())
app.listen(PORT, () => {
    console.log(`passengers server listening on port ${PORT}`);
})