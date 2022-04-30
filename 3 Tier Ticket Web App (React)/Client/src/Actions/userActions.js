import { AUTH } from '../constants'
import AuthenticationService from '../Services/AuthenticationService'


export const SignUp = (userData, navigate) => async dispatch => {
    try{
        const {data} = await AuthenticationService.signUp(userData)

        dispatch({type:AUTH, data})
        navigate('/profile')
    }
    catch(error){
        throw error;
    }
}

export const LogIn = (userData, navigate) => async dispatch => {
    try{
        const {data} = await AuthenticationService.signIn(userData)
        dispatch({type:AUTH, data})
        navigate('/profile')
    }
    catch(error){
        throw error;
    }
}