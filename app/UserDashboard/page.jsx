
import Sidebar from '@/components/Sidebar.jsx';
import NavBar from '@/components/NavBar';
import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';


export default function UserDashboard () {
  const customClassName = "w-full z-50 top-0 bg-sky-500 text-gray-800"
  return (
    <div className='bg-gray-100 h-full flex flex-col'>
    <div>
       <NavBar customClassName={customClassName}/>
       
    </div>
    <div className='flex flex-row'>
    <Sidebar />
    <div className='m-10'>
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CardActionsArea Example
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This CardContent is wrapped in a CardActionsArea, so this text and
            the above header are wrapped in a ButtonBase, which means they
            behave like a Button.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   
    </div>
    </div>
  );
};


