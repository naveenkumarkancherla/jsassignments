import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()
const uri='mongodb://0.0.0.0:27017'
mongoose.connect(uri,{useNewUrlParser:true})

const connection = mongoose.connection

connection.once('open',()=>{

    console.log('MongoDB is succesfuly connected')

})