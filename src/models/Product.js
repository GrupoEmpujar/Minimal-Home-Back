const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    description: String,
    price: Number,
    stock: Number,
    page: Number,
    destacado: Boolean
});



const productModel = mongoose.model('productos',productSchema, 'productos');

module.exports = productModel;