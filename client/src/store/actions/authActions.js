import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import * as Types from './types'


export const register = (user, history) => dispatch => {
    Axios.post('api/users/register', user)
        .then(res => {
            dispatch({
                type: Types.USER_ERROR,
                payload:{
                    error: {}
                }
            })
            console.log(res)
            history.push('./login')
        })
        .catch(error => {
            dispatch({
                type: Types.USER_ERROR,
                payload:{
                    error: error.response.data
                } 
            })
        })
} 

export const login = (user, history) => dispatch => {
    Axios.post('/api/users/login',user)
    .then(res => {
        //console.log(data)
        let token = res.data.token
        localStorage.setItem('auth_token', token)
        let decode = jwtDecode(token)
        console.log(decode) 
        
    })
    .catch(error => {
        console.log(error.response.data)

        dispatch({
            type:Types.USER_ERROR,
            payload:{
                error:error.response.data
            }
        })
    })

}