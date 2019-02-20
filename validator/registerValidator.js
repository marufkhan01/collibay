const validator = require('validator')

const validate = user => {
    let error = {}

    if(!user.name){ // name checking
        error.name = 'Please provide your name'
    }
    if(!user.email){ // email checking
        error.email = 'Please provide your email'
    }else if (!validator.isEmail(user.email)){ //valid email checking
        error.email = "Please provide a valid Email"
    }

    if(!user.password){ // password checking
        error.password = 'Please provide a password'
    }else if (user.password.length < 6){
        error.password = 'Password must be greater than 6 or equal'
    } 

    if(!user.confirmPassword){
        error.confirmPassword = 'Please confirm password'
    }else if (user.password !== user.confirmPassword){
        error.confirmPassword = 'Password doesn\'t match'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}

module.exports = validate