'use client'
import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePickerComp from '@/components/DatePicker';


export default function Consultation({isOpen, onClose}) {

    if (!isOpen) {
        return null; 
      }

  return (
    <>
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
        <DatePickerComp />
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}