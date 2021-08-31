const mongoose = require('mongoose');
const Schema = mongoose.Schema; // permite definir como van a lucir los datos


// definicion de los tipos de datos en un objeto de tipo Schema
const TaskSchema = new Schema({
    tittle: String ,
    description: String,
    status: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Task',TaskSchema);