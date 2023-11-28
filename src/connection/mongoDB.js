const mongoose = require('mongoose');

const connectDB = async({HOST, PORT, NAME})=>{
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
module.exports = connectDB;