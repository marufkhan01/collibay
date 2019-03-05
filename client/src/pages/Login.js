import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../store/actions/authActions' 

const intialstate = {
    email:'',
    password:'',
    error:''
}

class Login extends Component {
    
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
        event.preventDefault();

        this.props.login({...intialstate}, this.props.history)

          // clean text field
        this.myForm.current.reset()
        this.setState({
            ...intialstate
        })
      }


    render(){
        let {email, password,error} = this.state

        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-6">Login Here</h1>
                    <form ref={this.myForm} onSubmit = {this.submitHandler}>

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
                        
                        <Link to='/register'>Don't have account? Please Register Here.</Link>
                        <button className=" btn-btn-primary my-3 d-block">Login</button>
                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {login}) (Login)
