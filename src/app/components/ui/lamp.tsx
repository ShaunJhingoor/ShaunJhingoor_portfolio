"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import profile from "../../assets/image.png"
import { useState } from "react";
import { useEffect } from "react";
import { ModalTrigger, ModalContent, Modal } from "./animated-modal";
import resume from "../../assets/shaun.pdf"

export function LampDemo() {
  
    const [yValue, setYValue] = useState('-20vh');

    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 600) {
          setYValue('5vh'); 
        } else {
          setYValue('-20vh'); 
        }
      };
  
    
      window.addEventListener('resize', handleResize);
  
     
      handleResize();
  
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <LampContainer>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: yValue }} // Use state value for y
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
            marginBottom: '-10rem', // Equivalent to mt-2
            marginTop: '2rem',
            background: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)', // Light gradient colors from white to very light gray
            padding: '1rem', // Equivalent to py-4
            backgroundClip: 'text',
            textAlign: 'center',
            fontSize: '2.25rem', // Equivalent to text-4xl (36px)
            fontWeight: '500', // Equivalent to font-medium
            letterSpacing: '-0.015em', // Equivalent to tracking-tight
            color: 'transparent',
            
          }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={profile.src} alt="profile" style={{ width: '7.5rem', height: '7.5rem', borderRadius: '50%', alignSelf: 'center', objectFit: "cover"}} />
        </div>
        Hi, I am Shaun Jhingoor. 
        <p style={{ 
    fontSize: '1.2rem', 
    marginTop: '1rem', 
    maxWidth: '600px', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    lineHeight: '1.75',
    
  }}>Innovative coding professional with Biology/Healthcare background. Demonstrated ability to meet deadlines consistently. Driven by determination; thrives under high-stress situations. Ready to commit to a company dedicated to helping others and provide advanced solutions.</p>
   <div>
      <Modal>
        <ModalTrigger className="your-button-class">View Resume</ModalTrigger>
        <ModalContent resumeUrl={resume} className="your-content-class" />
      </Modal>
    </div>

      </motion.p>
      

    </LampContainer>
  );
}






  
export const LampContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
          className
        )}
      >
        <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 translate-y-[-1rem]"> {/* Adjusted translate-y to ensure better alignment */}
          <motion.div
            initial={{ opacity: 0, width: "10rem" }} // Initial opacity and width for a more gradual reveal
            whileInView={{ opacity: 1, width: "30vw" }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: "10rem" }} // Same initial settings as above
            whileInView={{ opacity: 1, width: "30vw" }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "20vw" }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
          ></motion.div>
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30vw" }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
          ></motion.div>
  
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
        </div>
  
        <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
          {children}
        </div>
      </div>
    );
  };
  
  
  