import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import axios from "../axios"
import cookie from "js-cookie"
import { Alert } from '@mui/material';
import {useSelector,useDispatch} from "react-redux"
import { signUp } from '../redux/action/user/userAction';
import {Navigate} from "react-router-dom"

const Signin = () => {
 
  const history=useNavigate()
   const dispatch=useDispatch()
   const userState=useSelector((state)=>state.USER)
  const [data, setData ] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  })
  // Handle Error
  const [err,setError]=useState({
    passErr:"",
    cPassErr:"",
    nameErr:"",
    emailErr:""
  })

  const handleChange = (e) => {
    e.preventDefault()
    const {name,value}=e.target
    if(name=="cpassword")
    {
      if(value!=data.password){
        setError({...err,cPassErr:"*Password Not Matched"})

      }
      else{
        setError({...err,cPassErr:""})

      }
    }
    setData({...data,[name]:value})
  }
  const sendData=async()=>{
    try{
      if(err.cPassErr==""){
    // const theSignIn=await axios.post("/signup",data)
    // if(theSignIn){
    //  await cookie.set("token",theSignIn.data.token)
    //   console.log(theSignIn.data.token)
    //   alert('Sign In Succesfully')
    //   history("/navbar")
    // }
    await dispatch(signUp(data))

  }

    }
    catch(e){
      console.log(e)
    }
  }
   if(userState.isLogedIn){
     return<Navigate to={"/navbar"}/>
    }
    else
    {
     
    return (
        <div>

             <Container component="main" maxWidth="xs">

                 <CssBaseline />
                   <Box
                      sx={{
                         marginTop: 8,
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         
                         }}
                     >
           <Typography component="h1" variant="h5" style={{textAlign:'center'}}>Welcome to our TodoApp</Typography>

              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                 <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  SignUp
             </Typography>
             
          <Box component="form"  method='post'>

          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="off"
              autoCapitalize
              value={data.name}
              onChange={handleChange}
              
            />
            <b style={{color:"red"}}>{err.nameErr}</b>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              value={data.email}
              onChange={handleChange}
            
            />
            <b style={{color:"red"}}>{err.emailErr}</b>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.password}
              onChange={handleChange}

            />
            <b style={{color:"red"}}>{err.passErr}</b>
            <TextField
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.cpassword}
              onChange={handleChange}
              
            />
            
           <b style={{color:"red"}}>{userState.err.email}</b><br/>
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Accept terms and conditions"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={sendData}
            >
             SignIn
            </Button>

           
          </Box>
        </Box>
      </Container>
        </div>
    )
     
  }
}

export default Signin;
