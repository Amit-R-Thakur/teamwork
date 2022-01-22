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
import axios from '../axios'
import cookie from "js-cookie"
import CircularProgress from '@mui/material/CircularProgress';
import { Card, Modal } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Login = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)



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
              onClick={getLogin} //getlogin
            
            >
             LogIn
            
            </Button>
            <b style={{color:"red"}}>{errr.msg}</b>
         <Typography component="h1" variant="h6">Dont have account ?  <Link to="signup">SignUp</Link></Typography>
            

            
          </Box>
        </Box>
        <SettingsIcon onClick={handleOpen} style={{width:'50px',backgroundColor:'blue', borderRadius:'10px',color:'white',position:'absolute',right:'4%',bottom:'4%'}}/>
        {/* <Button onClick={handleOpen} className="">Open modal</Button> */}

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height:310,
    backgroundColor: 'white',
    boxShadow: 24,
    }}
    >
  <CssBaseline/>
    <Typography  variant="h4" component="h2" style={{backgroundColor:'#1C19DE', textAlign:'center', color:'white'}}>
      Devloped By
    </Typography>
   
    <Box>
       <div style={{display:'inline'}}>
         <div style={{margin:'10px' }}>
             <a href="https://github.com/Anshika056"><img src="https://avatars.githubusercontent.com/u/87898249?v=" style={{height:'70px', width:'70px'}}  />
               <div style={{ float:'right', position:'absolute', top:'40px',left:'90px'}}>
                  <p>Anshika Madan</p>
                 <span>(Backend Devloper)</span>
               </div>
             </a>
         </div>
         <div style={{margin:'10px' }}>
             <a href="https://github.com/Amit-R-Thakur"><img src="https://avatars.githubusercontent.com/u/80210964?v=4" style={{height:'70px', width:'70px'}}  />
               <div style={{ float:'right', position:'absolute', top:'124px',left:'90px'}}>
                  <p>Amit Thakur</p>
                 <span>(Backend Devloper)</span>
               </div>
             </a>
         </div>
         <div style={{margin:'10px' }}>
             <a href="https://github.com/omkar2120"><img src="https://avatars.githubusercontent.com/u/79644475?v=4" style={{height:'70px', width:'70px'}}  />
               <div style={{ float:'right', position:'absolute', bottom:'13px',left:'90px'}}>
                  <p>Omkar Narad</p>
                 <span>(Frontend Devloper)</span>
               </div>
             </a>
         </div>
        
         
       </div>
    </Box>
  </Box>
</Modal>
      </Container>
        </div>
    )
}

export default Login;
