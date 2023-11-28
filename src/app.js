const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');


//Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//Rutas (middleware)
app.use('/product/v1',productRoutes);

app.use((req,res,next)=>{
    res.status(404).json({message:'Página no encontrada'});
})



module.exports = app;



