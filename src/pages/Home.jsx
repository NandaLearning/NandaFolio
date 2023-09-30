import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigasi from '../components/Navigasi';
import Footer from '../components/Footer';


export default function Home() {
  const menujuAbout = useNavigate();
  const menujuTech = useNavigate();
  const menujuWork = useNavigate();
  const menujuKontak = useNavigate();

  function gasToAbout(){
    menujuAbout('/about');
  }

  function gasToTech(){
    menujuTech('/tech')
  }

  function gasToWork(){
    menujuTech('/workship')
  }

  function gasContact(){
    menujuKontak('/contact')
  }



  const [activeLink, setActiveLink] = useState('tech');

  useEffect(() => {
    const linkIds = ['tech', 'work', 'kontak'];
    let currentIndex = linkIds.indexOf(activeLink);

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % linkIds.length;
      setActiveLink(linkIds[currentIndex]);
    }, 1000); // Ganti angka 2000 dengan interval yang Anda inginkan (dalam milidetik)

    return () => {
      clearInterval(intervalId);
    };
  }, [activeLink]);

  return (
    <div className="bg-white min-h-screen">
      <Navigasi />
      <div className="justify-center items-start grid h-full mt-8">
        <div className="text-7xl text-black font-bold font-sans">
          <h1>Welcome To My</h1>
          <h1 >Portfolio bruh!</h1>
        </div>

        <div className="mockup-phone border-primary mt-5">
          <div className="camera"></div>
          <div className="display">
            <div className="text-black font-bold text-5xl grid text-center mt-20">
              <a href="#" onClick={gasToAbout} className="text-6xl text-red-500 hover:underline duration-150">About Me</a>
              <a href="#" onClick={gasToTech} id="tech" className={`mt-4 ${activeLink === 'tech' ? 'bg-red-500' : ''} hover:bg-red-500 duration-200`}>My Tech</a>
              <a href="#" onClick={gasToWork} id="work" className={`mt-4 ${activeLink === 'work' ? 'bg-red-500' : ''} hover:bg-red-500 duration-200`}>Workship</a>
              <a href="#" onClick={gasContact} id="kontak" className={`mt-4 ${activeLink === 'kontak' ? 'bg-red-500' : ''} hover:bg-red-500 duration-200`}>Contact</a>
            </div>
          </div>
        </div>

        <div className="text-8xl text-black font-bold font-sans">
          <h1 className="text-center">Get Started!</h1>
          <h1 className="text-center">Choice Page</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}
