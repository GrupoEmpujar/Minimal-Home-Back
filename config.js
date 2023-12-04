const config = {
    appConfig :{
        PORT:process.env.APP_PORT || 3000
    },
    dbConfig:{
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        NAME: process.env.DB_NAME,
    }
}

module.exports = config;