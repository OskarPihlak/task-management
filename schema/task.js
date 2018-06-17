const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    id:{
        type: String
    }
});
let Task = module.exports = mongoose.model('Task', taskSchema);
