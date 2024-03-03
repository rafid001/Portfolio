import React from 'react'
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandLeetcode } from 'react-icons/tb';
import SocialBadge from './ui/SocialBadge';

export default function Aboutme() {
  return (
    <div>
        <div className="rounded-lg p-[1px] my-2 w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-[#121312] rounded-lg p-8 flex flex-col md:flex-row gap-6">
        {/* <div className="flex items-center mx-auto md:w-[80%]">
          <img
            src="/adi.jpeg"
            alt="Adi Image"
            width={300}
            height={300}
            className="rounded-full w-[150px] md:w-[300px] shadow-[0 10px 20px rgba(142, 0, 203, 0.7)]"
          />
        </div> */}
        <div className="flex flex-col items-center md:items-start overflow-hidden">
          <h2 className="font-semibold gap-1 text-center md:items-start tracking-tighter text-[clamp(1rem,5vw,1.5rem)] leading-none inline-flex mb-4 border-b w-fit pb-2">
            About me
          </h2>
          <p className="font-normal items-center tracking-wide text-base md:text-sm leading-normal">
            Hey, I'm Rafid Hasan, a passionate full-stack web developer dedicated to turning ideas into dynamic digital experiences. I thrive on the challenges of turning ideas into dynamic digital experiences. Beyond the screen, I explore new technologies and enjoy the ever-evolving landscape of web development. Let's connect and explore the endless possibilities together!
          </p>
          <div className="grid grid-cols-2 md:flex justify-start items-center gap-4 mt-6">
            <SocialBadge name="Github" link="https://github.com/rafid001" icon={<FaGithub className="w-5 h-5" />} />
            <SocialBadge name="Twitter" link="https://twitter.com/hasanrafid__" icon={<FaXTwitter className="w-5 h-5" />} />
            <SocialBadge name="LinkedIn" link="https://www.linkedin.com/in/rafid-hasan-860063219/" icon={<FaLinkedin className="w-5 h-5" />} />
            <SocialBadge name="Leetcode" link="https://leetcode.com/hrafid001" icon={<TbBrandLeetcode className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
