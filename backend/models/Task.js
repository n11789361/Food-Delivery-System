const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  // define fields
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task; // important











