const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerValidator = require('../validator/registerValidator')
const loginValidator = require('../validator/loginValidator')
const User = require('../model/User')
const {serverError, resourceError} = require('../util/error')

// login controller
module.exports = {
    login(req,res){
        let { email, password } = req.body
        let validate = loginValidator({ email, password})

        if(!validate.isValid){
           return res.status(400).json(validate.error)
        }

        User.findOne({email})
            .then(user => {
                if(!user){
                    return resourceError(res, 'User not found')
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err){
                        return serverError(res, err)
                    }
                    if(!result){
                        return resourceError(res, 'password doesn\'t match')
                    }
                    let token = jwt.sign({
                        _id: user._id,
                        name: user.name,
                        email:user.email

                    }, 'SECRET', {expireIn: '1h'})
                    
                    res.status(200).json({
                        message:'Login Successfull',
                        token: `BEARER ${token}`
                    })
                    
                })
            })
            .catch(error => serverError(res, error))
    },

    // Registration Controller
    
    register(req, res){
        let {name, email, password, confirmPassword} = req.body // Read Client Data
        let validate = registerValidator({name, email, password, confirmPassword})
        
        // validate check user data
        
        if(!validate.isValid){
           return res.status(400).json(validate.error)
        }else{
            console.log(email)
            User.findOne({email})  // check for duplicate user
                .then(user => {
                    console.log(user)
                    if(user){
                     return resourceError(res, 'Email Already Exit')
                    }
                
                    
                    bcrypt.hash(password, 11, (err,hash) => {
                        if(err){
                            return resourceError(res, 'Server error')

                        }

                        let user = new User({
                            name,
                            email,
                            password:hash
                        })
                        user.save() // save to database
                            .then(user => {
                                res.status(201).json({ 
                                    message:'User created successfully'
                                })
                            })
                            .catch(error => serverError(res,error))
                    })
                 })

                .catch(error => serverError(res, error))
        }

    }
}
