"use client";

import React, { useEffect, useState } from "react";
import Particles from "../magicui/particles";

import { useTheme } from "next-themes";
import ShimmerButton from "../magicui/shimmer-button";

const Navbar = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <nav className="fixed flex justify-center w-full  overflow-hidden z-50 ">
      <div className="supports-backdrop-blur:bg-white/90 flex justify-between gap-20 w-full max-w-[500px] rounded-full py-4 px-4 m-4 bg-white/40 backdrop-blur-md transition-all dark:bg-black/20 items-center border border-neutral-100">
        <section>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />

          <svg
            width="1256"
            height="183"
            viewBox="0 0 1256 183"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-auto"
          >
            <title>Mobbin</title>
            <path d="M389.833 85.1666H292.5V182.5H389.833V85.1666Z"></path>
            <path d="M0.5 182.499V96.8064L97.3064 0H182.999V85.6931L86.1931 182.499H0.5Z"></path>
            <path d="M146.497 182.5V96.8064L243.303 2.28882e-05H328.997V85.6931L232.19 182.5H146.497Z"></path>
          </svg>
        </section>

        <section>
          <ShimmerButton className="rounded-full font-semibold">
            Get started
          </ShimmerButton>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
