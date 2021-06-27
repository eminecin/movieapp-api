const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    director_id : Schema.Types.ObjectId,
    title: {
        type:String,
        required:[true,"The field `{PATH}` is required."],
        maxLength:[50,"The field `{PATH}` must be less then {{MAXLENGTH}} characters."],
        minLength:[5,"The field `{PATH}` must be greater then {{MINLENGTH}} characters."],
    },
    catagory:{type:String,maxLength:30,minLength:1},
    country:{type:String,maxLength:30,minLength:3},
    year:{type:Number,min:1850,max:2500},
    imdb_score:{type:Number,min:0,max:10},
    createdAt:{type:Date,default:Date.now}
})


    module.exports = mongoose.model("movie",MovieSchema)
