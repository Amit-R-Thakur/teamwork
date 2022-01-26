import { CssBaseline , TextField  , Button , Checkbox, } from '@mui/material';
import React from 'react'
import Container from '@mui/material/Container'
import Box from "@mui/material/Box"
// import Typography  from '@mui/material/Typography';
import {useDispatch,useSelector} from "react-redux"
import { createTodo,getTodo ,toggleTodoState,deleteTodo} from '../redux/action/todo/todoAction';
import { useState ,useEffect} from 'react';

const Todos = () => {
    const TodoState=useSelector((state)=>state.TODO)
    const dispatch=useDispatch()
    const [todo,setTodo]=useState("")
    const sendTodo=(e)=>{
        const {value}=e.target
        setTodo(value)
    }
    const manageCreateTodo=async()=>{
       await dispatch(createTodo(todo))
       setTodo("")
    }
    const toggle=async(id)=>{
        await dispatch(toggleTodoState(id))
    }
    const deleteTodoData=async(id)=>{
        await dispatch(deleteTodo(id))
    }

    useEffect(()=>{
        const getData=async()=>{
            const data=await dispatch(getTodo())
        }
        getData()
    },[dispatch])




    return (
        <div >
         <Container component="main" maxWidth='sm'  >

            <Box component='form'  style={{display:'flex', marginTop:'15px'}}>
                    <TextField
                         onChange={sendTodo}
                        margin="normal"
                        required
                        fullWidth
                        id="text"
                        name="text"
                        autoFocus
                        autoComplete="off"
                        placeholder="Add your work here"
                        value={todo}
                   /> 
                    <Button onClick={manageCreateTodo} style={{
                         padding:'10px',
                         backgroundColor:'blue' , 
                         height:'50px',
                         color:'white',
                         position:'relative',
                         top:'10px',
                         margin:'10px'
                        }}
                        >Add +
                     </Button>
                </Box>
        </Container>


             <Container style={{width:'80%'}} >

               <Box sx={{                                                                     //todos
                    backgroundColor:'white'
                       }} 
                       style={{
                           boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                           padding:"0.5%"
                           
                             }}>
 {/* main div todo */}
 {TodoState.todo.map((data)=>(
      <Box style={{display:'flex',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
      <Box width="15%">  
            <Checkbox checked={data.status} onClick={()=>{toggle(data._id)}}/>
      </Box>

      <Box style={{width:'60%'}}>
          <h4>{data.content}</h4>
      </Box>

      <Box style={{ margin:'12px' }}>
          <Button style={{color:'#22B4DB'}}> Edit</Button>
          <Button style={{color:'#DE192E'}} onClick={()=>{deleteTodoData(data._id)}}>Delete</Button>
       </Box>
  
   </Box>


 ))}
 
 </Box>  

               
</Container>

        </div>

    )
}

export default Todos;
