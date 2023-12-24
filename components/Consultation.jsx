'use client'
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DatePickerComp from '@/components/DatePicker';
import { createClient } from '@supabase/supabase-js';



export default function Consultation({isOpen, onClose}) {

    if (!isOpen) {
        return null; 
      }
    
    

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        selectedService: '',
        selectedDate: null, 
    });
    
      const handleChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };
    
      const handleBookNow = async () => {
        const supabaseUrl = 'https://armysdalwzlfvbxvsyxi.supabase.co';
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        const supabase = createClient(supabaseUrl, supabaseKey);
        try {
            
            const { data: { user } } = await supabase.auth.getUser()

            console.log(formData)
            const { error } = await supabase
            .from('bookings')
            .insert({
                    id: user.id,
                    firstname: formData.firstName, 
                    lastname: formData.lastName, 
                    email: formData.email, 
                    number: formData.phoneNumber, 
                    service: formData.selectedService,
                    date: formData.selectedDate
                })
                console.log(error)
            }
        catch (error) {
            console.error("Error:", data.error);
        } 
    }

      return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
          <DialogTitle>Book An Appointment With Us</DialogTitle>
          <DialogContent>
            <DialogContentText>Please provide the information below</DialogContentText>
    
            <div className="flex flex-row">
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
              <TextField
                margin="dense"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
                variant="standard"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </div>
    
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <TextField
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              fullWidth
              variant="standard"
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
            <TextField
              select
              margin="dense"
              id="dropdown"
              label="Select Service"
              fullWidth
              variant="standard"
              value={formData.selectedService}
              onChange={(e) => handleChange('selectedService', e.target.value)}
            >
              <MenuItem value="Lawn Maintenance">Lawn Maintenance</MenuItem>
              <MenuItem value="Tree and Shrub Care">Tree and Shrub Care</MenuItem>
              <MenuItem value="Weed Control and Fertilization">Weed Control and Fertilization</MenuItem>
            </TextField>
    
            <div className="text-black">
              <DatePickerComp onChange={(date) => handleChange('selectedDate', date)} />
            </div>
    
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleBookNow}>Book Now</Button>
          </DialogActions>
        </Dialog>
      );
    };

    
