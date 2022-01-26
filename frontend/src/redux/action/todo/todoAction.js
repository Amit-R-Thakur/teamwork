import * as todo from "../../constant/todoConstant"
import axios from "../../../axios"

export const getTodo=()=>async(dispatch,getState)=>{
    try{
        const {token}=getState().USER
        dispatch({type:todo.TODO_REQUESTED})
        const theTodo=await axios.get("todo/get/user",{headers:{authorization:token}})
        if(theTodo){
            dispatch({type:todo.TODO_ADD,payload:theTodo.data})
            dispatch({type:todo.TODO_SUCCESS})
        }
    }
    catch(err){
        console.log(err.response.data)
    }
}

export const createTodo=(data)=>async(dispatch,getState)=>{
    try{
        const {token}=getState().USER
        dispatch({type:todo.TODO_REQUESTED})
        const theTodo=await axios.post("/createtodo",{content:data},{headers:{authorization:token}})
        if(theTodo){
            dispatch(getTodo())

        }
    }
    catch(err){
        console.log(err.response.data)

    }

}
export const toggleTodoState=(_id)=>async(dispatch,getState)=>{
    try{
        const {token}=getState().USER
       dispatch({type:todo.TODO_REQUESTED})
       await axios.patch(`/todo/update/status/${_id}`,{},{headers:{authorization:token}})
       dispatch(getTodo())

    }
    catch(err){
        console.log(err.response.data)
    }

}

export const todoEdit=(_id,value)=>async(dispatch,getState)=>{
    try{
        const {token}=getState().USER
        dispatch({type:todo.TODO_REQUESTED})
        await axios.patch(`/todo/update/${_id}`,{content:value},{headers:{authorization:token}})
        dispatch(getTodo())

    }
    catch(err){
        console.log(err.response.data)
    }
}

export const deleteTodo=(_id)=>async(dispatch,getState)=>{
    try{
        const {token}=getState().USER
       dispatch({type:todo.TODO_REQUESTED})
       await axios.delete(`/todo/delete/${_id}`,{headers:{authorization:token}})
       dispatch(getTodo())

    }
    catch(err){
        console.log(err.response.data)
    }

}