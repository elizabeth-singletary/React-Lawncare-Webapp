"use client"

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';


export default function NavBar({ customClassName }) {
  const [scrollPos, setScrollPos] = useState(0);
  const supabaseUrl = 'https://armysdalwzlfvbxvsyxi.supabase.co';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [isLoggedin, setIsLoggedin] = useState(false);

   const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setIsLoggedin(true)
      }
      return user;
    }
      
  const user = getUser(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = customClassName || (scrollPos > 10 ? "fixed w-full z-50 top-0 bg-white text-gray-800" : "fixed w-full z-30 top-0");
  const navActionClassName = scrollPos > 10 ? "mx-auto lg:mx-0 hover:underline bg-sky-500 text-white font-bold rounded-full my-4 lg:my-0 py-4 px-8 shadow-lg opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" : "mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-4 lg:my-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out";

    return (
        <nav id="header" className={navbarClassName}>
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 pr-4">
          <div class="pl-4 flex items-center">
            <Link class="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="./">
              <img class="h-16 fill-current inline" src="/EvergreenLogo.svg" alt="Evergreen Logo" />
              EVERGREEN LAWN CARE
            </Link>
          </div>
          <div class="block lg:hidden pr-4">
            <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <Link class="inline-block py-2 px-4 text-black font-bold no-underline" href="./">Home</Link>
              </li>
              <li class="mr-3">
                <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">About Us</a>
              </li>
              <li class="mr-3">
                <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Pricing</a>
              </li>
            </ul>
            <Link href="/login">
              <button
              id="navAction"
              class={navActionClassName}
            >
              {isLoggedin ? "My Account" : "Login"}
            </button>
            </Link>
            
          </div>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    );
  }