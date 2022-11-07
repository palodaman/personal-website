import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { margin } from '@mui/system';
import { Grid, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
// import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  mt:0,
  px: 2,  py: 1

};

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <Tooltip TransitionComponent={Zoom} title="Get in Touch"> 

    <Button onClick={handleOpen} style={{ backgroundColor: 'black',
       color: 'white', marginTop:'3.4px', fontSize:'8', fontFamily:'sarif' }}>Contact </Button>
    </Tooltip>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // closeAfterTransition
      >
         <Fade in={open}>
        <Box sx={style} mt={0}>
        {/* <Grid container justify="space-between">   */}
        <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'42px'}}>
        <Typography id="modal-modal-title" variant="h6" component="h2" align="left" fontSize={15}>
            2368827691 
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" align="left" fontSize={15}>
              palod.aman@gmail.com
          </Typography>


        </Box>
        <Grid rowSpacing={0.5}>
  
        <Typography id="modal-modal-title" variant="h6" component="h2" align="center" marginBottom={-1} fontWeight={425} >
            Aman Palod 
          </Typography>
            
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center" fontSize={15} >
           Software Engineering Student, UVic
          </Typography>
        </Grid>

        <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2" align="center" marginTop={7} fontSize={15}>
          Vancouver, BC
          </Typography>
        </Box>
       

          {/* </Grid> */}
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}
