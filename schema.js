const mongoose = require("mongoose");
const autopartsSchema = mongoose.Schema({
  sheetName: {
    type: String,
    
  },
  autoParts: {
    type: String,
    
  },
  moreInfo: {
    type: String,
    
  },
  features: {
    type: String,
    
  },
  oem: {
    type: String,
    
  },
  image: {
    type: String,
    
  },
  price: {
    type: Number,
    
  },
});

module.exports = Autoparts = mongoose.model("autoparts", autopartsSchema);