/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const postSchema = new Schema({
  post: {
    type: String,
    required: [true, "Post can't be empty"]
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  user_name: String,
  user_email: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

var Post = mongoose.model("Post", postSchema);
module.exports = Post;
