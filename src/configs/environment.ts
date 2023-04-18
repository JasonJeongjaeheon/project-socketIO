import dotenv from 'dotenv'
dotenv.config({path: __dirname + `/../../.${process.env.NODE_ENV}.env`})

console.log(process.env.NODE_ENV)

const config = {
    port: process.env.PORT,
    db_url: process.env.MONGODB_URI,
    db_name: process.env.MONGODB_PROJECTNAME,
    db_username: process.env.MONGODB_USERNAME,
    db_password: process.env.MONGODB_PASSWORD
}

console.log(config)

export default config