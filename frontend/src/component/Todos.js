import { CssBaseline , TextField  , Button , Checkbox, Modal , Typography } from '@mui/material';
import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Box from "@mui/material/Box"
// import Typography  from '@mui/material/Typography';

const Todos = () => {
    const [open, setOpen] = useState(false);
    const editModalOpen = () => setOpen(true);
    const editModalClose = () => setOpen(false)



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
                         margin:'10px',
                         width:'30%'
                        }}
                        >Add +
                     </Button>
                </Box>
        </Container>


             <Container style={{width:'80%'}} >

               <Box sx={{                                                                     //todos
                    backgroundColor:'white', marginTop:'15px'
                       }} 
                       style={{
                           boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                           
                             }}>
 {/* main div todo */}

         <Box style={{display:'flex' , marginTop:'15px'}}>
                <Box width="15%" style={{marginTop:'15px'}}>  
                      <Checkbox />
                </Box>

                <Box style={{width:'60%', margin:'px'}}>
                    <h4>Hello World</h4>
                </Box>
       
                <Box style={{ margin:'15px' }}>
                    <Button style={{color:'#22B4DB'}} onClick={editModalOpen} > Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
            
             </Box>
{/* second div */}
         <Box style={{display:'flex', marginTop:'15px'}}>
            <CssBaseline/>
                <Box width="15%" style={{marginTop:'15px'}}>
                      <Checkbox/>
                </Box>

                <Box style={{width:'60%', margin:'px'}}>
                    <h4>Hello World</h4>
                </Box>

                <Box style={{ margin:'15px' }}>
                    <Button style={{color:'#22B4DB'}} > Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
             </Box>
             
{/* second div */}

         <Box style={{display:'flex', marginTop:'15px'}}>
            <CssBaseline/>
                <Box width="15%" style={{marginTop:'15px'}}>
                      <Checkbox/>
                </Box>

                <Box style={{width:'60%', margin:'px'}}>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                </Box>

                <Box style={{ margin:'15px' }}>
                    <Button style={{color:'#22B4DB'}} > Edit</Button>
                    <Button style={{color:'#DE192E'}}>Delete</Button>
                 </Box>
             </Box>



           </Box>          
</Container>

<Modal
  open={open}
  onClose={editModalClose}
  
>
  <Box style={{ position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundColor:'white',
  transform: 'translate(-50%, -50%)',
  display:'flex',
  borderRadius:'10px'
  

  
  }}>
    <div style={{margin:'10px',display:'flex',width:'400px'}}>
     <TextField 
              margin="normal"   
              required
              fullWidth
              id="edit"
              label="Edit"
              name="edit"
              autoFocus
              autoComplete="on"
              width='100%'
              
        />
        <Button style={{backgroundColor:'blue',margin:'20px', height:'50px' ,color:'white'}} >Save</Button>
        </div>
  </Box>
</Modal>
        </div>

    )
}

export default Todos;
