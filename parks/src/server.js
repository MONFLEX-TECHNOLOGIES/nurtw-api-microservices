// require("dotenv").config();
require("./connection/mongo.conn")()
const parkRoutes = require("./park.routes")
const express = require("express")
const cors = require("cors");
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/v1/parks", parkRoutes())
app.listen(PORT, () => {
    console.log(`parks server listening on port ${PORT}`);
})