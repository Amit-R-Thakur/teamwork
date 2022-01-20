import React , {useState} from 'react'
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
import Container from '@mui/material/Container';
import { Link  } from 'react-router-dom'
import axios from "../axios"
import cookie from "js-cookie"
const Login = () => {
  const navigate=useNavigate()
 
  const [data , SetData] = useState({
    email:"",
    password:""
  })
  // Handle Error........
  const [errr,setError]=useState({
    msg:""
  })

  const handleChange = (e) => {
    e.preventDefault()
    const {name,value}=e.target
    SetData({ ...data, [name]: value})

  }
  const getLogin=async()=>{
    try{
      const isLogedIn=await axios.post("/login",data)
      if(isLogedIn){
        await cookie.set("token",isLogedIn.data.token)
        navigate("/navbar")
      }

    }
    catch(err){
      setError({...errr,msg:`*${err.response.data}`})
    }

  }
    return (
        <div>
               <Container component="main" maxWidth="xs" >
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
                  Log In
             </Typography>
          <Box component="form" method='post'>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              autoComplete="off"
              value={data.email}
              onChange={handleChange}

            />
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={getLogin}
            >
             LogIn
            </Button>
            <b style={{color:"red"}}>{errr.msg}</b>
         <Typography component="h1" variant="h6">Dont have account ?  <Link to="signup">SignUp</Link></Typography>
            

            
          </Box>
        </Box>
      </Container>
        </div>
    )
}

export default Login;
