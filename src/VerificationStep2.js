import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Step3Modal from './VerificationStep3';
import { PinInput } from 'react-input-pin-code'; 


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

export default function Step2Modal(props) {
  const [open, setOpen] = React.useState(false);
  const [openStep3, setOpenStep3] = React.useState(false);
  const [values, setValues] = React.useState(['', '', '', '', '', '']);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            You Must Complete Verification
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Input PIN you have been receive to ferivy this account
          </Typography>
          <div style={{padding:'20px 10px 20px 60px', textAlign:'center'}}>
                    <PinInput
                values={values}
                onChange={(value, index, values) => setValues(values)}
              />
          </div>
          <Button style={{ backgroundColor: 'black', padding: '10px', color: 'white', borderRadius:'8px'}} onClick={() => {setOpen(props.close);setOpenStep3(true);}}>Next</Button>
        </Box>
      </Modal>
      <Step3Modal open={openStep3} close={() => {setOpenStep3(false)}}></Step3Modal>
    </div>
  );
}

