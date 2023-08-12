require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const itemRoute = require("./controllers/partinfo");
const connectDatabse = require("./database");
const autoParts = require("./schemas/schema")
  
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

app.use("/modifyData", async(req,res) => {
  const parts = await autoParts.find();
  for(let i = 0; i < parts.length; i++){
    let data = []
    const feature = parts[i].features;
    const row = feature.split("\n")
    row.forEach(element => {
      let row = element.split("\t")
      if(row.length === 1){
        row = row[0].split("        ")
        console.log(row)
      }
      data.push(row)
    });
    // console.log(data)
    parts[i].feature = data;
    // console.log(parts[i].feature)
    await parts[i].save();
  }
})

module.exports = app;