const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskid: Number,
  name: String,
  description: String,
  responsibles: [String],
  status: String,
  startedAt: Date,
  endAt: Date,
  success: Boolean,
  progress: Number,
  level: Number
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
