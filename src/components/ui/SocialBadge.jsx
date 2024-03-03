import React from 'react'

export default function SocialBadge({ name, icon, link, className }) {
  return (
    <div>
        <a href={link} target='_blank' rel='noopener noreferrer' className={`flex justify-center items-center gap-2 rounded-md px-3 py-1 bg-[#333333] hover:bg-white transition-colors duration-150 text-white hover:text-black shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] w-fit ${className}`}>
      {icon}
      <span>{name}</span>
    </a>
    </div>
  )
}
