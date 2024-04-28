import React from 'react';

export default function BackgroundImage() {
    return (
    <>
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black gradient-mask-t-0 h-screen"></div>
      <img
        src="logos/ooorganize.svg"
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-60"
        style={{ overflow: "hidden" }}
        alt="Hero background"
      />
      <img
        src="logos/bbblurry.svg"
        className="absolute inset-0 w-full h-full object-cover z-[-2] opacity-60"
        style={{ overflow: "hidden" }}
        alt="Hero background"
      />
    </>
    )
}