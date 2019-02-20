import React,{Component} from 'react'
import { Link } from 'react-router-dom'

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

    changehandler = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();

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
                                className= "form-group"
                                placeholder="Enter your Email"
                                name= 'email'
                                id= 'email'
                                value={email}
                                onChange = {this.changehandler}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor='password'>Password: </label>
                            <input
                                type="password"
                                className= "form-group"
                                placeholder="Enter your Password"
                                name= 'password'
                                id= 'password'
                                value={password}
                                onChange = {this.changehandler}
                            />
                        </div>
                        
                        <Link to='/register'>Don't have account? Please Register Here.</Link>
                        <button className=" btn-btn-primary my-3 d-block">Login</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login