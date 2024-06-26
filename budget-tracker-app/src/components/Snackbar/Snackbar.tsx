import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';

interface CustomizedSnackbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CustomizedSnackbar: React.FC<CustomizedSnackbarProps> = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event: React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;