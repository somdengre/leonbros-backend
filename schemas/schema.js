// const mongoose = require("mongoose");
// const autopartsSchema = mongoose.Schema({
//   sheetName: {
//     type: String,
    
//   },
//   autoParts: {
//     type: String,
    
//   },
//   moreInfo: {
//     type: String,
    
//   },
//   features: {
//     type: String,
    
//   },
//   oem: {
//     type: String,
    
//   },
//   image: {
//     type: String,
    
//   },
//   price: {
//     type: Number,
    
//   },
// });

// module.exports = Autoparts = mongoose.model("autoparts", autopartsSchema);

const mongoose = require("mongoose");

const featureSchema = mongoose.Schema({
  field : Array
})
const autopartsSchema = mongoose.Schema({
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


module.exports = Autoparts = mongoose.model("autoparts", autopartsSchema);