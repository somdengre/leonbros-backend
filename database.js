const mongoose = require("mongoose");
const Db = process.env.DB_URL;
const connectDatabse = () => {
  mongoose
    .connect(Db)
    .then((data) => {
      console.log(`Connected with database : ${data.connection.host}`);
    })
    .catch(err => { 
      console.log(err)
      console.log("Unable to connect to db")
    })

};

module.exports = connectDatabse;    