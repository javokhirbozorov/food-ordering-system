import axios from 'axios'
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';

export const userAction = (user)=>async dispatch=>{
    dispatch({type:'REGISTER_REQUEST'});
    
    try{
        const response = await axios.post('/api/user/register', user)
        console.log(response);
        dispatch({type: 'REGISTER_SUCCESS'})
        sessionStorage.setItem('currentUser', JSON.stringify(response.data))
    } catch(error){
        dispatch({type: 'REGISTER_FAILED'})
    }


} 

export const userLogin = (user)=>{

    return async (dispatch)=>{
        dispatch({type:USER_SIGNIN_REQUEST, payload:user});
    
        console.log(user, '😀😀😀😀');
        try{
            const response = await axios.post('/api/user/login', user)

           
            dispatch({type:USER_SIGNIN_SUCCESS, payload:response.data})
            
            sessionStorage.setItem('currentUser', JSON.stringify(response.data))

        }catch(error){
            dispatch({type:USER_SIGNIN_FAIL, payload:error.message})
        }
    }
}

export const logoutUser=()=>dispatch=>{


    sessionStorage.clear()
    window.location.href='/login'

}

