const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DirectorSchema = new Schema({

    name:{type:String,maxLength:60,minLength:1},
    surname:{type:String,maxLength:60,minLength:1},
    bio:{type:String,maxLength:1000},
    createdAt:{type:Date,default:Date.now}
})


    module.exports = mongoose.model("director",DirectorSchema)
