import { CssBaseline, Typography , TextField  , Button , FormControlLabel , Checkbox,} from '@mui/material';
import React from 'react'
import Container from '@mui/material/Container'
import Box from "@mui/material/Box"
import { display, flexbox, margin } from '@mui/system';
// import Typography  from '@mui/material/Typography';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';

const Todos = () => {
    return (
        <div >
            <Container component="main" maxWidth='sm' >

            <Box component='form' maxWidth="sx"  style={{display:'flex'}}>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    name="text"
                    autoFocus
                    autoComplete="off"
                    placeholder="Add your work here"
                    

                /> 
                                <Button style={{
                                    padding:'10px',
                                    backgroundColor:'blue' , 
                                    height:'50px',
                                    color:'white',
                                    position:'relative',
                                    top:'10px',
                                    margin:'10px'
                                    }}>Add +</Button>


            </Box>

<CssBaseline/>
            <Box sx={{
                width:500,
                alignContent:'center',
                backgroundColor:'white',
                
            }} style={{
                boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                marginTop:20,
                
            }}>
             <Box sx={{display:'flex' , alignItems:'space-around'}}>
                <Checkbox/>
                <h1>Hello</h1>
                <Box sx={{marginLeft:'200px' , marginTop:'23px'}}>
                <Button style={{backgroundColor:'#22BCE2', color:'white', }}> Edit</Button>
                <Button style={{backgroundColor:'#f44336', color:'white'}}> Delete</Button>
                </Box>
                
             </Box>
             
           
             
             
           </Box>
           
            </Container>
        </div>
    )
}

export default Todos;
