import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Step4Modal from './VerificationStep4';
import { OrbitProgress } from 'react-loading-indicators';


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
  textAlign: 'center',
};

export default function Step3Modal(props) {
  const [open, setOpen] = React.useState(false);
  const [openStep4, setOpenStep4] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  // console.log(open)

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <OrbitProgress variant="track-disc" color="#000000" size="large" speedPlus="-2" text="" textColor="" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please wait a moment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We are processing to verified this account
          </Typography>
          
          <Button style={{ backgroundColor: 'black',marginTop:'50px', padding: '10px', color: 'white', borderRadius:'8px'}} onClick={() => {setOpen(props.close);setOpenStep4(true);}}>Next</Button>
        </Box>
      </Modal>
      <Step4Modal open={openStep4} close={() => {setOpenStep4(false)}}></Step4Modal>
    </div>
  );
}

