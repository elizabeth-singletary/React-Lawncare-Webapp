import React from 'react';
import NavBar from '@/components/NavBar';

export default function UserDashboard()  {
  return (
  
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <NavBar />
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold mb-8 text-gray-800">Lawn Care Company Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Current Services */}
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Current Services</h2>
            {/* Add your current services component here */}
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-green-500 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            {/* Add your upcoming appointments component here */}
          </div>

          {/* Outstanding Bills */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Outstanding Bills</h2>
            {/* Add your outstanding bills component here */}
          </div>

          {/* Book an Appointment */}
          <div className="bg-indigo-500 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
            {/* Add your book an appointment component here */}
          </div>

          {/* Profile Settings */}
          <div className="bg-pink-500 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            {/* Add your profile settings component here */}
          </div>
        </div>

        {/* Other Components */}
        {/* Add any other necessary components here */}
      </div>
    </div>
  );
};


