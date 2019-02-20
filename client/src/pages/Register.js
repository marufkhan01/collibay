import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register} from '../store/actions/authActions'

const intialstate = {
        name:'',
        email:'',
        password:'',
        confirmPassword:'' ,
        error:''
}
class Register extends Component {
    constructor(){
        super()
        this.myForm = React.createRef()
    }

    state= {
         ...intialstate
    }
    
static getDerivedStateFromProps(nextProps, prevState){
    if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)){
        return{
            error: nextProps.auth.error
        }
    }
    return null
}

    changehandler = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.register({...intialstate}, this.props.history)

        // clean text field
        this.myForm.current.reset()
        this.setState({
            ...intialstate
        })
    }

    render(){
        let {name, email, password, confirmPassword,error} = this.state

        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-6">Register Here</h1>
                    <form ref={this.myForm} onSubmit = {this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor='name'>Name: </label>
                            <input
                                type="text"
                                className= { error.name ? 'form-control is-invalid': 'form-control'}
                                placeholder="Enter your name"
                                name= 'name'
                                id= 'name'
                                value={name}
                                onChange = {this.changehandler}
                            />
                            {error.name && <div className ="invalid-feedback"> 
                                {error.name}
                            </div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor='email'>Email: </label>
                            <input
                                type="email"
                                className= { error.email ? 'form-control is-invalid': 'form-control'}
                                placeholder="Enter your Email"
                                name= 'email'
                                id= 'email'
                                value={email}
                                onChange = {this.changehandler}
                            />
                            {error.email && <div className ="invalid-feedback"> 
                                {error.email}
                            </div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor='password'>Password: </label>
                            <input
                                type="password"
                                className= { error.password ? 'form-control is-invalid': 'form-control'}
                                placeholder="Enter your Password"
                                name= 'password'
                                id= 'password'
                                value={password}
                                onChange = {this.changehandler}
                            />
                            {error.password && <div className ="invalid-feedback"> 
                                {error.password}
                            </div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor='confirmPassword'>Confirm Password: </label>
                            <input
                                type="confirmPassword"
                                className= { error.confirmPassword ? 'form-control is-invalid': 'form-control'}
                                placeholder="Enter your Confirm Password"
                                name= 'confirmPassword'
                                id= 'confirmPassword'
                                value={confirmPassword}
                                onChange = {this.changehandler}
                            />
                            {error.confirmPassword && <div className ="invalid-feedback"> 
                                {error.confirmPassword}
                            </div>}
                        </div>

                        <Link to='/login'>Already have account? Please Login Here.</Link>
                         <button className=" btn-btn-primary my-3 d-block">Register</button>
                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps, {register})(Register)