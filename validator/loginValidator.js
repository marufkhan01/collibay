const validator = require('validator')

const validate = user => {
    let error = {}


    if(!user.email){ // email checking
        error.email = 'Please provide your email'
    }else if (!validator.isEmail(user.email)){ //valid email checking
        error.email = "Please provide a valid Email"
    }

    if(!user.password){ // password checking
        error.password = 'Please provide a password'
    }

    return{
        error,
        isValid: Object.keys(error).length === 0
    }

}

module.exports = validate