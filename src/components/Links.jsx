import React from 'react'
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbSquareRoundedLetterP, TbBrandLeetcode } from "react-icons/tb";
import Breadcrumbs from './Breadcrumbs';
import { motion } from "framer-motion";


export default function Links() {
    const links = [
        {
          name: "Github",
          username: "rafid001",
          link: "https://github.com/rafid001",
          icon: <FaGithub className="w-5 h-5" />,
        },
        {
          name: "Twitter",
          username: "hasanrafid__",
          link: "https://twitter.com/hasanrafid__",
          icon: <FaXTwitter className="w-5 h-5" />,
        },
        {
          name: "Discord",
          username: "rafid001",
          link: "https://discord.com/users/rafid001",
          icon: <FaDiscord className="w-5 h-5" />,
        },
        {
          name: "LinkedIn",
          username: "Rafid Hasan",
          link: "https://www.linkedin.com/in/rafid-hasan-860063219/",
          icon: <FaLinkedin className="w-5 h-5" />,
        },
        {
          name: "Leetcode",
          username: "hrafid001",
          link: "https://www.leetcode.com/hrafid001",
          icon: <TbBrandLeetcode className="w-5 h-5" />,
        },
        // {
        //   name: "PeerList",
        //   username: "adityaj07",
        //   link: "https://peerlist.dev/adityaj07",
        //   icon: <TbSquareRoundedLetterP className="w-5 h-5" />,
        // },
        // {
        //   name: "Instagram",
        //   username: "adiijoshii",
        //   link: "https://www.instagram.com/adiijoshii",
        //   icon: <FaInstagram className="w-5 h-5" />,
        // },
      ];

  return (
    <div>
        <motion.div
      className="w-full h-screen md:h-[49.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-[90%] gap-4 md:w-3/5 mx-auto ">
        <div className="mt-10 md:mt-0">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: "Links",
                href: "/links",
                active: true,
              },
            ]}
          />
        </div>
        <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 font-semibold relative inline-flex gap-1 items-center tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none border-b border-zinc-600/40 pb-4">
          Links
        </h1>
        <div className="link__container rounded-lg p-[1px] my-2 w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
          <ul className="bg-[#161716] rounded-lg p-4 flex flex-col gap-4">
            {links.map((linkObj) => (
              <li
                className="px-4 py-4 text-lg rounded-lg bg-[#26262A] hover:bg-[#101012] cursor-pointer transition-colors duration-150 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                key={linkObj.name}
              >
                <a href={linkObj.link} target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg">
                  <div className="flex items-center space-x-2">
                    {linkObj.icon}
                    <span className="leading-6">
                      {`${linkObj.name} - ${linkObj.username}`}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
    </div>
  )
}
