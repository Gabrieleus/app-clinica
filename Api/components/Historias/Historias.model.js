let mongoose = require('mongoose');

let historiaSchema = new mongoose.Schema({
    Nombre : {type : String, required: true},
    Edad : {type : Number, required: true}
})

module.exports = mongoose.model('Historia', historiaSchema)