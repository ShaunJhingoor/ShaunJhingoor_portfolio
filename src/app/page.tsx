"use client";
import NavBar from "./components/ui/navbar-menu";
import SparklesCore from "./components/ui/Sparkles";
import { LampDemo } from "./components/ui/lamp";
// import BackgroundGradientAnimation from "./components/ui/background-gradient-animation";
import { useEffect, useState } from "react";

const Popup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <SparklesCore
        background="#000000"
        particleDensity={150}
        minSize={1}
        maxSize={3}
        speed={10}
        className="fixed inset-0" // Ensures SparklesCore takes up the whole screen
      />
      {/* <BackgroundGradientAnimation/> */}
      <div className="absolute flex items-center justify-center inset-0">
        <h1 className="text-4xl font-bold text-white">Welcome!</h1>
      </div>
    </div>
  );
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Show the popup for 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showPopup ? (
        <Popup />
      ) : (
        <>
          <NavBar />
          <LampDemo/>
        </>
      )}
    </main>
  );
}



