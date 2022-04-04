const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const userBiodataSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    // user_id: {
    //   type: ObjectId,
    //   ref: "user_game",
    //   required: true,
    // },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_game",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", userBiodataSchema);
