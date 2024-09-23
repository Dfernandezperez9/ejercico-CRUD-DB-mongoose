const MONGOOSE = require('mongoose');

const TASK_SCHEMA = new MONGOOSE.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true });

const TASK = MONGOOSE.model('Task', TASK_SCHEMA);

module.exports = TASK;