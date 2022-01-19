import React,{useState} from 'react'
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


const Signin = () => {

  const [data, setData ] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
  })

  const handleChange = ({currentTarget:input}) => {
    setData({ ...data , [input.name]: input.value})

  }
   
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
                  SignIn
             </Typography>
          <Box component="form" onSubmit="">

          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoFocus
              autoComplete="off"
              autoCapitalize
              value={data.name}
              onChange={handleChange}
              
            />
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Accept terms and conditions"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             SignIn
            </Button>

           
          </Box>
        </Box>
      </Container>
        </div>
    )
}

export default Signin;
