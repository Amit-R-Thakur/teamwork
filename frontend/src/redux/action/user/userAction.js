import * as user from "../../constant/userConstant"
import axios from "../../../axios"
import Cookies from "js-cookie"
import {TODO_CLEAR} from "../../constant/todoConstant"
export const login=(data)=>async(dispatch)=>{
    try{
        dispatch({type:user.USER_LOGIN_REQUESTED})
        const isLogedIn=await axios.post("/login",data)
        if(isLogedIn){
            await Cookies.set("todoToken",isLogedIn.data.token)
            dispatch({type:user.CLEAR_ERROR})
            dispatch({type:user.USER_LOGIN_SUCCESS,payload:isLogedIn.data})
        }

    }
    catch(err){
        dispatch({type:user.USER_LOGIN_ERROR,key:"email",msg:err.response.data})

    }
}
export const signUp=(data)=>async(dispatch)=>{
    try{
        dispatch({type:user.USER_SIGNUP_REQUESTED})
        const isSignIn=await axios.post("/signup",data)
        console.log(isSignIn)
        if(isSignIn){
            await Cookies.set("todoToken",isSignIn.data.token)
            dispatch({type:user.CLEAR_ERROR})
            dispatch({type:user.USER_SIGNUP_SUCCESS,payload:isSignIn.data})
        }

    }
    catch(err){
        dispatch({type:user.USER_SIGNUP_ERROR,key:"email",msg:err.response.data})

    }
}
export const setUser=()=>async(dispatch,getState)=>{
    try{
        
        dispatch({type:user.SET_USER_REQUESTED})
        const userState=getState().USER
        const theUser=await axios.get("/get/user",{headers:{authorization:userState.token}})
        dispatch({type:user.SET_USER,payload:theUser.data})
        console.log(theUser)


    }
    catch(err){

    }

}


export const logOut=()=>async(dispatch)=>{
    await Cookies.remove("todoToken")
    dispatch({type:user.LOGOUT})
    dispatch({type:TODO_CLEAR})

}