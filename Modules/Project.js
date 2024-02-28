const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  editors: [String],
  status: String,
  startedAt: Date,
  progress: Number,
  numberOfChapters: Number,
  pdfLink: String
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
