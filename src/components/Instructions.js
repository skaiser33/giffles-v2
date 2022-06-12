import React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import buttonTheme from '../themes/buttonTheme';




    //   <div className="instructions">
    //   <p><em>How To Play</em><br />
    //   <small>Choose a category and guess the title of a movie, song, or book based on the gifs.<br/>
    //       You have 30 seconds for each title. Quicker answers get additional points.<br/>
    //       Each gif corresponds to one word of the title, excluding common articles, prepositions, etc which will be provided free of charge.We'll also help out with punctuation where we can.<br/>
    //       Each word will perform a real time search of the top gifs under that search term on Giphy, so each game of Giffle is a totally unique experience.<br/>
    //       If you don't like your gifs, just hit the "New Clues Please!" button and receive another set of gifs for the same title. You can ask for new clues up to four times per round.</small></p>
    // </div>

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
      },
    }));
    
    const BootstrapDialogTitle = (props) => {
      const { children, onClose, ...other } = props;
    
      return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
          {children}
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
      );
    };
    
    BootstrapDialogTitle.propTypes = {
      children: PropTypes.node,
      onClose: PropTypes.func.isRequired,
    };
    
    function Instructions() {
      const [open, setOpen] = React.useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    
      return (
        <div>
          <ThemeProvider theme={buttonTheme}>
            <Button variant="outlined" id="instruct-button" onClick={handleClickOpen}>
              HOW TO PLAY
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="instructions-dialog"
              open={open}
            >
              <BootstrapDialogTitle id="instructions-dialog" onClose={handleClose}>
                HOW TO PLAY
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Choose a category and guess the title of a movie, song, or book based on the series of gifs.<br/>
                  ***
                </Typography>
                <Typography gutterBottom>
                  Each gif corresponds to one word of the title, excluding common articles, prepositions, etc which will be provided free of charge.We'll also help out with punctuation where we can.<br/>
                  ***
                </Typography>
                <Typography gutterBottom>
                  Each word will perform a real time search of the top gifs under that search term on Giphy, so each game of Giffle is a totally unique experience.<br/>
                  ***
                </Typography>
                <Typography gutterBottom>
                  You have 30 seconds for each title. Quicker answers get additional points.<br/>
                  ***
                </Typography>
                <Typography gutterBottom>
                  If you don't like your gifs, just hit the "New Clues Please!" button and receive another set of gifs for the same title. You can ask for new clues up to four times per round.
                </Typography>
              </DialogContent>
            </BootstrapDialog>
          </ThemeProvider>
        </div>
      );
    }

export default Instructions;
