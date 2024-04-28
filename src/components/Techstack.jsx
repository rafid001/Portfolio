import React from 'react'
import { languages, frontend, backend, other } from '../../data';
import { FaArrowRight } from "react-icons/fa6";

export default function Techstack() {
    const trimDescriptionToWords = (description, limit) => {
        const words = description.split(" ");
        const trimmedWords = words.slice(0, limit);
        return trimmedWords.join(" ");
      };
  return (
    <div>
         <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2 rounded-md px-6 py-4 md:px-8 md:py-6 border border-zinc-500/40 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
        <h3 className="mb-4 text-lg font-medium inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
          Programming languages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((language) => (
            <div
              key={language.name}
              className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
            >
              <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
                <img
                  src={language.img}
                  alt={language.img}
                  className="aspect-square h-full w-full object-contain"
                />
              </span>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
                  {language.name}
                </h4>
                <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
                  {trimDescriptionToWords(language.desc, 15)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-md px-6 py-4 md:px-8 md:py-6 border border-zinc-500/40 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
        <h3 className="mb-4 text-lg font-medium inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
          Frontend
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {frontend.map((frontendItem) => (
            <div
              key={frontendItem.name}
              className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
            >
              <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
                <img
                  src={frontendItem.img}
                  alt={frontendItem.img}
                  className="aspect-square h-full w-full object-contain"
                />
              </span>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
                  {frontendItem.name}
                </h4>
                <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
                  {trimDescriptionToWords(frontendItem.desc, 15)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-md px-6 py-4 md:px-8 md:py-6 border border-zinc-500/40 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
        <h3 className="mb-4 text-lg font-medium inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
          Backend
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {backend.map((backendItem) => (
            <div
              key={backendItem.name}
              className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
            >
              <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
                <img
                  src={backendItem.img}
                  alt={backendItem.img}
                  className="aspect-square h-full w-full object-contain"
                />
              </span>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
                  {backendItem.name}
                </h4>
                <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
                  {trimDescriptionToWords(backendItem.desc, 15)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-md px-6 py-4 md:px-8 md:py-6 border border-zinc-500/40 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
        <h3 className="mb-4 text-lg font-medium inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
          Others
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {other.map((otherItem) => (
            <div
              key={otherItem.name}
              className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
            >
              <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
                <img
                  src={otherItem.img}
                  alt={otherItem.img}
                  className="aspect-square h-full w-full object-contain"
                />
              </span>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
                  {otherItem.name}
                </h4>
                <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
                  {trimDescriptionToWords(otherItem.desc, 15)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
