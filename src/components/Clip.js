import React, {useState} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const MediaDialog = ({ text, open, setOpen }) => {
  return (
    <Dialog
        open={open}
        onClose={ () => setOpen(false) }
      >
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
  )
}

const Clip = ({ appear, index, background }) => {
  const [ openDialog, setOpenDialog ] = useState(false);

  let indexToAppear = (index < 10) ? `00${index}` : `0${index}`;

  let style = !appear ? { backgroundColor: background, minHeight: 80, minWidth: 80, opacity: 0 } : { backgroundColor: background, minHeight: 80, minWidth: 80 }

  return (
      <div 
        onClick={() => setOpenDialog(true)}
      >
        <MediaDialog 
          open={openDialog} 
          setOpen={setOpenDialog}
        />
          <div 
            style={{ 
              opacity: 0.25,
              paddingBottom: 3
            }}
          > 
            | {indexToAppear} 
          </div>

          {/* Image */}
          <div style={style}>

          </div>
          {/* Image */}
      </div>
  )
}

export default Clip;