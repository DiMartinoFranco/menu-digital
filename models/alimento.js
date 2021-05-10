const mongoose= require('mongoose')
const Schema = mongoose.Schema;


const alimentoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String
});

//crear modelo

const Alimento= mongoose.model('Alimento', alimentoSchema);

module.exports = Alimento;