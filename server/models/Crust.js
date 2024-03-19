import mongoose from "mongoose";

const crustSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
    maxLength: 12,
    unique: true
  }
});

const Crust = mongoose.model("Crust", crustSchema);

export default Crust;
