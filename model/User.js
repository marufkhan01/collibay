const mongoose = require('mongoose')
const Schema = mongoose.Schema  // Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
})

const User = mongoose.model('User', userSchema) // Create a model. Models are responsible for creating and reading documents from MongoDB database
module.exports = User