"use client"
import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation'


export default function signup() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a Supabase client
    const supabaseUrl = 'https://armysdalwzlfvbxvsyxi.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      const {
        data: { session, error },
      } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      });

      
    const { error_user } = await supabase
      .from('profiles')
      .insert({ 
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email
    })

      console.log(error_user)

      router.push('/UserDashboard', { scroll: true })

    } catch (error) {
      console.error("Error:", data.error);
    }

    // Reset the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

return (

        <div>
            <NavBar />
<div class="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5 gradient">
    <div class="bg-white text-gray-500 h-140 rounded-3xl shadow-xl w-full overflow-hidden mt-20" style={{maxWidth:"1000px"}}>
        <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 bg-white py-10 px-10">
               <img src="/RegisterPic.svg" alt="WomanCuttingGrass" />
            </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">First name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name="firstName" onChange={handleChange} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Last name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text"  name="lastName" onChange={handleChange} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email"  name="email" onChange={handleChange} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password"  name="password" onChange={handleChange} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button type="submit" onSubmit={handleSubmit} class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>

    );
}