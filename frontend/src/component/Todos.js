import { CssBaseline , TextField  , Button , Checkbox, } from '@mui/material';
import React from 'react'
import Container from '@mui/material/Container'
import Box from "@mui/material/Box"
// import Typography  from '@mui/material/Typography';


const Todos = () => {




    return (
        <div >
         <Container component="main" maxWidth='sm'  >

            <Box component='form'  style={{display:'flex', marginTop:'15px'}}>
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

         <Box style={{display:'flex',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
                <Box width="15%">  
                      <Checkbox />
                </Box>

                <Box style={{width:'60%'}}>
                    <h4>Hello World</h4>
                </Box>
       
                <Box style={{ margin:'12px' }}>
                    <Button style={{color:'#22B4DB'}}> Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
            
             </Box>
             <Box style={{display:'flex',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
                <Box width="15%">  
                      <Checkbox />
                </Box>

                <Box style={{width:'60%'}}>
                    <h4>Hello World</h4>
                </Box>
       
                <Box style={{ margin:'12px' }}>
                    <Button style={{color:'#22B4DB'}}> Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
            
             </Box>
             <Box style={{display:'flex',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
                <Box width="15%">  
                      <Checkbox />
                </Box>

                <Box style={{width:'60%'}}>
                    <h4>Hello World</h4>
                </Box>
       
                <Box style={{ margin:'12px' }}>
                    <Button style={{color:'#22B4DB'}}> Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
            
             </Box>
             <Box style={{display:'flex',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
                <Box width="15%">  
                      <Checkbox />
                </Box>

                <Box style={{width:'60%'}}>
                    <h4>Hello World</h4>
                </Box>
       
                <Box style={{ margin:'12px' }}>
                    <Button style={{color:'#22B4DB'}}> Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
            
             </Box>
{/* second div */}
         <Box style={{display:'flex', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
            <CssBaseline/>
                <Box width="15%" style={{marginTop:'15px'}}>
                      <Checkbox/>
                </Box>

                <Box style={{width:'60%', margin:'px'}}>
                    <h4>Hello World</h4>
                </Box>

                <Box style={{ margin:'15px' }}>
                    <Button style={{color:'#22B4DB'}}> Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
             </Box>
             
{/* second div */}

         <Box style={{display:'flex',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
            <CssBaseline/>
                <Box width="15%" style={{marginTop:'15px'}}>
                      <Checkbox/>
                </Box>

                <Box style={{width:'60%', margin:'px'}}>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                </Box>

                <Box style={{ margin:'15px' }}>
                    <Button style={{color:'#22B4DB'}}> Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
             </Box>



           </Box>          
</Container>

        </div>

    )
}

export default Todos;
