const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    imageUrl: String,
    caption: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
