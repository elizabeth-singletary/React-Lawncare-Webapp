'use client'
import { useContext } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { AuthContext } from '@/app/context/authContext';
import './globals.css';
import { ClassNames } from "@emotion/react";



export default function Home() {

  const userContext = useContext(AuthContext);
  console.log(`this is user context ${userContext}`)

  return (
    <div className="gradient">
    <AuthContext.Provider value={userContext}>
    <NavBar /> 
    <Hero />
    <AboutUs />
    <Services />
    <Pricing />
    <CallToAction />
    <Footer />
    </AuthContext.Provider>
    </div>
  
  
  );
}
