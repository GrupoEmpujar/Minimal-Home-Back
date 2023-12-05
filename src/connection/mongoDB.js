const mongoose = require('mongoose');

const connectDB = async ({ HOST, PORT, NAME }) => {
    try {
        console.log(HOST, PORT, NAME);
        const uri = `mongodb://${HOST}:${PORT}/${NAME}`
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
}
mongoose.connection.on("open", () => {
    console.log("Base de datos conectada");
});
mongoose.connection.on('error', function (err) {
    console.log('Error de conexión a la base de datos: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Conexión a la base de datos cerrada');
});
module.exports = connectDB;