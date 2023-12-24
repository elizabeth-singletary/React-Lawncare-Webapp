'use client'
import Sidebar from '@/components/SideBar';
import NavBar from '@/components/NavBar';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function UserDashboard() {
  const [userServices, setUserServices] = useState([]);

  const supabaseUrl = 'https://armysdalwzlfvbxvsyxi.supabase.co';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const fetchServices = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('id', user.id);

      if (error) {
        console.error('Error fetching services:', error.message);
      } else {
        setUserServices(data || []); 
      }
    } catch (error) {
      console.error('Unexpected error:', error.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []); 

  const customClassName = "w-full z-50 top-0 gradientuser text-gray-800";

  return (
    <div className='bg-gray-100 h-full flex flex-col'>
      <div>
        <NavBar customClassName={customClassName} />
      </div>
      <div className='flex flex-row'>
        <Sidebar />
        <div className='m-10'>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Your Upcoming Services
                </Typography>
                <div>
                  {userServices.map((appointment, index) => (
                    <div key={index}>
                      <h2>{`Service Selected: ${appointment.service}`}</h2>
                      <h3>{`${appointment.firstname} ${appointment.lastname}`}</h3>
                      <p>Date: {appointment.date}</p>
                      <p>Contact Number: {appointment.number}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};



