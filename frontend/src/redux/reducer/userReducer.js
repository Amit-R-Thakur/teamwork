import Cookies from "js-cookie"
import * as user from "../constant/userConstant"
const initialState={
    isLogedIn:false,
    loading:false,
    token:Cookies.get("todoToken"),
    user:[],
    err:false
}
export const USER=(state=initialState,action)=>{
    switch(action.type){
        case user.SET_USER_REQUESTED:
            return{
                ...state,
                loading:true
            }
        case user.SET_USER:
            return{
                ...state,
                loading:false,
                isLogedIn:true,
                user:action.payload
            }
        case user.USER_LOGIN_REQUESTED:
        return{
            ...state,
            loading:true
        }
        case user.USER_LOGIN_SUCCESS:
            return{
                ...state,
                isLogedIn:true,
                loading:false,
                token:action.payload.token,
                user:action.payload.user
            }
        case user.USER_LOGIN_ERROR:
            return{
                ...state,
                loading:false,
                err:{[action.key]:action.msg}
        }
        case user.USER_SIGNUP_REQUESTED:
        return{
            ...state,
            loading:true
        }
        case user.USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isLogedIn:true,
                loading:false,
                token:action.payload.token,
                user:action.payload.user
            }
        case user.USER_SIGNUP_ERROR:
            return{
                ...state,
                loading:false,
                err:{[action.key]:action.msg}
        }
        case user.CLEAR_ERROR:
            return{
                ...state,
                err:false
            }


        case user.LOGOUT:
            return{
                isLogedIn:false,
                loading:false,
                token:Cookies.get("todoToken"),
                user:[],
                err:false
            }
            default :
            return state
    
    }
  

}