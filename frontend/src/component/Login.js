import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import axios from "../axios";
import cookie from "js-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/user/userAction";
import {Navigate} from "react-router-dom"
import CircularIndeterminate from "./Loading";
const Login = () => {
  const dispatch = useDispatch();
  const userState=useSelector((state)=>state.USER)
  const [data, SetData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    SetData({ ...data, [name]: value });
  };
  const getLogin = async () => {
    try {
      await dispatch(login(data))
    } catch (err) {
      console.log(err)
    }
  };
if(userState.isLogedIn)return <Navigate to={"/navbar"}/>
else
{
  if(userState.loading)
  {
    return <CircularIndeterminate/>
  }
  else{
    
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: "center" }}
          >
            Welcome to our TodoApp
          </Typography>

          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" method="post">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              autoComplete="on"
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
            <b style={{ color: "red" }}>{userState.err.email}</b>
            <Typography component="h1" variant="h6">
              Dont have account ? <Link to="signup">SignUp</Link>
            </Typography>
          </Box>
        </Box>
       
      </Container>
    </div>
  );
  
}

}
};

export default Login;
