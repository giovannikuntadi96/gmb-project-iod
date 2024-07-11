import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Step2Modal from './VerificationStep2';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Step1Modal(props) {
  const [open, setOpen] = React.useState(false);
  const [openStep2, setOpenStep2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(open + ' dari 1')

  return (
    <div>
      <Button style={{ backgroundColor: 'black', padding: '10px', color: 'white', borderRadius:'8px'}} onClick={handleOpen}>Verification</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You Must Complete Verification
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Follow the instructions below for more information.
            Please choose a verification methode below
          </Typography>
          <div style={{marginTop:'10px'}}>
            <input type="radio" name="verif_method" value="Postcard"></input>
            <label>Postcard</label><br/>
            <input type="radio" name="verif_method" value="Phone Call"></input>
            <label>Phone Call</label><br/>
            <input type="radio" name="verif_method" value="SMS"></input>
            <label>SMS</label><br/>
            <input type="radio" name="verif_method" value="Email"></input>
            <label>Email</label><br/>
          </div>
          <Button style={{ backgroundColor: 'black', marginTop:'50px', padding: '10px', color: 'white', borderRadius:'8px'}} onClick={() => {handleClose();setOpenStep2(true);}}>Next</Button>
        </Box>
      </Modal>
      <Step2Modal open={openStep2} close={() => {setOpenStep2(false)}}></Step2Modal>
    </div>
  );
}

