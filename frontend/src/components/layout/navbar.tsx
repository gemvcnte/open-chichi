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
    <nav className="fixed flex justify-center w-full  overflow-hidden  ">
      <div className="supports-backdrop-blur:bg-white/90 flex justify-between gap-20 w-full max-w-[500px] rounded-full py-4 px-4 m-4 bg-white/40 backdrop-blur-md transition-all dark:bg-black/20 items-center">
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
            <g clip-path="url(#clip0_168_31)">
              <path d="M592.536 128.213L542.732 13.725H502.5V166.493H532.548L532.614 63.5475L578.057 166.493H607.016L652.524 63.5683V166.493H682.573V13.725H642.319L592.536 128.213Z"></path>
              <path d="M755.143 52.0468C705.055 52.0468 694.544 83.3728 694.544 109.633C694.544 149.761 714.562 169.254 755.731 169.254C796.901 169.254 816.526 149.927 816.526 110.173C816.526 70.4189 795.876 52.0261 755.164 52.0261L755.143 52.0468ZM725.77 109.094C725.77 89.0193 730.306 78.8265 755.143 78.8265C778.257 78.8265 785.3 86.2376 785.3 110.588C785.3 134.939 778.344 142.537 755.535 142.537C732.726 142.537 725.77 134.731 725.77 109.114V109.094Z"></path>
              <path d="M895.376 52.2337H894.788C876.754 52.3167 862.668 65.1668 858.961 71.0002V13.725H828.52V166.493H858.961V165.455L859.113 150.882C864.063 158.958 877.299 169.275 894.613 169.275C932.446 169.275 948.604 152.107 948.604 111.875C948.604 71.6437 932.185 52.2544 895.376 52.2544V52.2337ZM917.967 109.633C917.967 140.025 903.946 142.495 887.003 142.495C870.06 142.495 856.431 140.067 856.431 110.36C856.431 87.7737 865.11 78.9718 887.395 78.9718C909.681 78.9718 917.967 86.6942 917.967 109.613V109.633Z"></path>
              <path d="M1027.52 52.2337H1026.93C1008.9 52.3167 994.811 65.1668 991.104 71.0002V13.725H960.663V166.493H991.104V165.455L991.257 150.882C996.207 158.937 1009.44 169.254 1026.76 169.254C1064.59 169.254 1080.75 152.086 1080.75 111.855C1080.75 71.6229 1064.33 52.2337 1027.52 52.2337ZM1050.11 109.633C1050.11 140.025 1036.09 142.495 1019.15 142.495C1002.2 142.495 988.575 140.067 988.575 110.36C988.575 87.7737 997.253 78.9718 1019.54 78.9718C1041.82 78.9718 1050.11 86.6942 1050.11 109.613V109.633Z"></path>
              <path d="M1124.08 54.6418H1093.64V166.493H1124.08V54.6418Z"></path>
              <path d="M1205.65 52.1921C1188.75 52.1921 1175.1 62.8002 1170.72 71.0001V54.6418H1140.28V166.493H1170.72V101.309C1170.72 86.6942 1175.06 79.7191 1199.74 79.7191C1218.43 79.7191 1225.06 85.5525 1225.06 102.035V166.473H1255.5V108.699C1255.5 66.6614 1242.92 52.3997 1205.65 52.1714V52.1921Z"></path>
              <path d="M1124.08 13.725H1093.64V42.7051H1124.08V13.725Z"></path>
            </g>
          </svg>
        </section>

        <section>
          <ShimmerButton className="shadow-2xl rounded-full font-semibold">
            Get started
          </ShimmerButton>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
