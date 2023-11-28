//Tiene que estar primero, requerimos las variables de entorno
require('dotenv').config();
const app = require('./src/app');
const {appConfig, dbConfig} = require('./config');
const connectDB = require('./src/connection/mongoDB');

const initApp = async(appConfig, dbConfig)=>{
    try {
        await connectDB(dbConfig);
        app.listen(appConfig.PORT,()=>{
            console.log(`Escuchando el servidor http://localhost:${appConfig.PORT}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}
initApp(appConfig,dbConfig);