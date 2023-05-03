/* eslint-disable default-case */

import { USER_LIST_FAIL,USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants"

export const userRegisterReducer=(state={success: false },action)=>{

    switch(action.type){
        case 'REGISTER_REQUEST': return{
            loading:true,

        }

        case 'REGISTER_SUCCESS': return{
            loading:false,
            success:true,
            user: action.payload, 
        }
        case 'REGISTER_FAILED': return{
            loading:false,
            error:action.payload
        }
        default:
            return state
    }
}


export const userLoginReducer =(state={} , action) =>{


    switch(action.type)
    {
        case USER_SIGNIN_REQUEST : return{
            loading:true
        }
        case USER_SIGNIN_SUCCESS : return{
          loading:false,
          success:true,
          currentUser : action.payload
      }
      case USER_SIGNIN_FAIL : return{
          loading:false,
          error:action.payload
      }
      default : return state
    }


}

export const getAllUsersReducer=(state={users : [] } , action)=>{

    switch(action.type)
    {
        case USER_LIST_REQUEST : return{
            loading : true,
            ...state
        }
        case  USER_LIST_SUCCESS : return{
            loading : false ,
            users : action.payload
        }
        case  USER_LIST_FAIL : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}
