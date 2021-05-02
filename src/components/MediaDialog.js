import React from 'react';

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

export default MediaDialog;