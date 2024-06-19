"use client";

import WordRotate from "@/components/magicui/word-rotate";
import React from "react";

const HeroWordRotate = () => {
  return (
    <WordRotate
      className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
      words={["Lorem Ipsum", "Dolor Sit", "Amet Consectetur"]}
    />
  );
};

export default HeroWordRotate;
