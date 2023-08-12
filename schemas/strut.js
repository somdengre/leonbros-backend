const mongoose = require("mongoose");

const featureSchema = mongoose.Schema({
  field : Array
})
const strutMountSchema = mongoose.Schema({
  agpart: {
    type: String,
    
  },
  image: {
    type: String,
    
  },
  moong: {
    type: String,
    
  },
  oem: {
    type: String,
    
  },  
  features
  : {
      type: String,
    },
    feature
  : {
      type: [Array]
    }
});


module.exports = strutMount = mongoose.model("strutMount", strutMountSchema);