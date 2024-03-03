import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "./ui/BackgroundImage";
import { useState } from "react"; // Import useState hook for state management
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Header from "./Header";
import { useRef } from "react";


const Hero = () => {
  const [activeSection, setActiveSection] = useState(""); // Use state for active section
  const [timeOfLastClick, setTimeOfLastClick] = useState(Date.now());
  const downloadPdf = useRef(null);

  const handleDownload = (e) => {
    e.preventDefault(); // Prevents the default behavior of the anchor tag
    window.open("/src/components/CV.pdf", "_blank");
  };
  



  return (
    <>
    <div className="overflow-hidden">
      <BackgroundImage/>
     
      <motion.div
        className="h-[45rem] w-full relative flex items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[2.60rem] md:text-[5rem] lg:text-[6rem] md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5 w-[90%] md:w-[70%] text-center">
          Hello, I&apos;m Rafid Hasan
        </p>
        <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[2rem] md:text-xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 md:py-3 w-[70%] text-center">
          I handcraft each line of code with the idea to solve problem.
        </p>
        {/* <p className="md:text-[1.2rem] lg:text-[1.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3 w-[70%] text-center">
          Its currently
          <span className="font-bold mx-1">
            <Clock
              format={"h:mm:ssa"}
              ticking={true}
              timezone={"Asia/Kolkata"}
              noSsr={false}
            />
          </span>{" "}
          here in Lucknow, India📍
        </p> */}


        <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
        {/* <a
        href="#contact"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
      >
        Contact me here{" "}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </a> */}

<a
  href="mailto:hrafid001@gmail.com"
  className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
  onClick={() => {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
  }}
>
  Contact me here{" "}
  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
</a>

      {/* <a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10"
        href="assets/CV.pdf"
        download
      >
        Download CV{" "}
        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
      </a> */}

<a
      className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10"
      href="/src/components/CV.pdf"
      download="CV.pdf"
      onClick={handleDownload}
    >
      Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>
      <a
        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
        href="https://www.linkedin.com/in/rafid-hasan-860063219/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
        href="https://github.com/rafid001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
      </motion.div>
      </motion.div>

      

  
    </div>
    </>
  );
};

export default Hero;
