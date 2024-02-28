const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  submissionid:Number,
  text: String,
  status: String
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
