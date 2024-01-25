const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Todo");

const schemea = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", schemea);
module.exports = {
  todo: todo,
};
