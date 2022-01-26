import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Todos from './Todos';
import { CssBaseline, Typography } from '@mui/material';
import {useDispatch,useSelector} from "react-redux"
import { logOut } from '../redux/action/user/userAction';
import {Navigate} from "react-router-dom"
import { useState } from 'react';
import { Card, Modal } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
const Navbar = () => {
  const dispatch=useDispatch()
  const userState=useSelector((state)=>state.USER)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const logedOut=async()=>{
    await dispatch(logOut())

  }
  if(!userState.isLogedIn){
    return <Navigate to={"/"}/>
  }
  else{
  
    return (
        <div>
             <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{height:'70px'}}>
        <Toolbar style={{justifyContent:'space-between'}}>
          <h3>Welcome, {userState.user.fullname}</h3>
          <Button color="inherit" onClick={logedOut}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Todos />
    <SettingsIcon
          onClick={handleOpen}
          style={{
            width: "50px",
            backgroundColor: "blue",
            borderRadius: "10px",
            color: "white",
            position: "absolute",
            right: "4%",
            bottom: "4%",
          }}
        />
        {/* <Button onClick={handleOpen} className="">Open modal</Button> */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 310,
              backgroundColor: "white",
              boxShadow: 24,
              border: "none",
            }}
          >
            <CssBaseline />
            <Typography
              variant="h4"
              component="h2"
              style={{
                backgroundColor: "#1C19DE",
                textAlign: "center",
                color: "white",
              }}
            >
              Developed By
            </Typography>

            <Box>
              <div style={{ display: "inline" }}>
                <div style={{ margin: "10px" }}>
                  <a href="https://github.com/Anshika056">
                    <img
                      src="https://avatars.githubusercontent.com/u/87898249?v="
                      style={{ height: "70px", width: "70px" }}
                    />
                    <div
                      style={{
                        float: "right",
                        position: "absolute",
                        top: "40px",
                        left: "90px",
                      }}
                    >
                      <p>Anshika Madan</p>
                      <span>(Backend Developer)</span>
                    </div>
                  </a>
                </div>
                <div style={{ margin: "10px" }}>
                  <a href="https://github.com/Amit-R-Thakur">
                    <img
                      src="https://avatars.githubusercontent.com/u/80210964?v=4"
                      style={{ height: "70px", width: "70px" }}
                    />
                    <div
                      style={{
                        float: "right",
                        position: "absolute",
                        top: "124px",
                        left: "90px",
                      }}
                    >
                      <p>Amit_R_Thakur</p>
                      <span>(Full Stack Developer)</span>
                    </div>
                  </a>
                </div>
                <div style={{ margin: "10px" }}>
                  <a href="https://github.com/omkar2120">
                    <img
                      src="https://avatars.githubusercontent.com/u/79644475?v=4"
                      style={{ height: "70px", width: "70px" }}
                    />
                    <div
                      style={{
                        float: "right",
                        position: "absolute",
                        bottom: "13px",
                        left: "90px",
                      }}
                    >
                      <p>Omkar Narad</p>
                      <span>(Frontend Developer)</span>
                    </div>
                  </a>
                </div>
              </div>
            </Box>
          </Box>
        </Modal>
        </div>
    )
      
  }

}

export default Navbar;


