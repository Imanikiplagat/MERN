const { mongoose} = require( '../db');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title:String,
    status: {type: String , enum:["todo","in_progress","done"],default:"todo"},
    owner: String
} ,{Timestamp: true});

const Task = mongoose.model('Task',taskSchema)

module.exports ={ Task }