const mongoose = require("mongoose");

const toorschima = mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  no_of_travellers: Number,
  budget_per_person: Number,
});

const ToorModel=mongoose.model("toor",toorschima)

module.exports={
    ToorModel
}
