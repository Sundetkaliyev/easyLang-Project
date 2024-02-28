const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notificationid: Number,
  name: String,
  description: String,
  type: String,
  editor: String,
  status: String,

  // id, editor, status
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
