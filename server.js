require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const itemRoute = require("./controllers/partinfo");
const connectDatabse = require("./database");
  
connectDatabse();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.use("/v1/items",itemRoute)

const server_listen = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });

module.exports = app;