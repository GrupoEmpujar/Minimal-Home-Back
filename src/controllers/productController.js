const Product = require('../models/Product');

const getAllProducts = async(req,res)=>{
    try {
        const productos = await Product.find();
        if(!productos){
            res.status(404).json({message:'Los productos no se encontraron', error:true});
        }
        res.status(200).json({productos})
    } catch (error) {
        console.log(error);
    }
}
const getProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        //*Findone
        const producto = await Product.findById(id);

        if(!producto){
            res.json({message:'No se encontro el producto', error:true})
        }
        res.status(200).json({producto, error:false});
    } catch (error) {
        res.json({message:'No se encontro el producto', error:true})
    }
}
const addProduct = async(req,res)=>{
    console.log(req.body);
    try {
        const {name, description, price, stock, category, image, page} = req.body;
        const producto = new Product({
            name,
            description,
            price,
            stock,
            category,
            image,
            page
        });
        await producto.save();
        res.status(201).json({message:'Producto agregado correctamente',error:false,producto});
    } catch (error) {
        res.status(500).json({message: 'El curso no se pudo agregar',error:true});
    }
};
const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        await Product.findByIdAndUpdate(id, req.body,{new:true});
        return res.status(201).json({message:'Editado correctamente',error:false});
    } catch (error) {
        return res.status(500).json({errorMessage:error,error:true,message:'No se pudo editar el producto'});
    }
};
const deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id, req.body);
        res.status(200).json({message:'Se elimino correctamente',error:false})
    } catch (error) {
        return res.status(500).json({message:'No se pudo eliminar el producto',error:true});
    }
}



module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}