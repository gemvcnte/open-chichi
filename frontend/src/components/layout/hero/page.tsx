import React from "react";
import { Button } from "../../ui/button";
import { ChevronRight } from "lucide-react";

import RetroGrid from "@/components/magicui/retro-grid";
import WordRotate from "@/components/magicui/word-rotate";

const Hero = () => {
  return (
    <section className="text-center pt-48">
      {/* <h1 className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        Lorem Ipsum <br /> Dolor Sit <br />
      </h1> */}

      <WordRotate
        className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
        words={["Lorem Ipsum", "Dolor Sit", "Amet Consectetur"]}
      />

      <p className="text-balance text-lg tracking-tight text-gray-400 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        alias aliquid?
      </p>

      <Button className="mt-4">
        Get started
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>

      <RetroGrid className="-mt-[250px]" />

      <p className="my-[900px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam,
        adipisci odit accusantium repudiandae modi itaque! Dolores, nobis
        consequuntur cupiditate sapiente, repellendus obcaecati asperiores et ea
        aliquam doloremque qui sequi officia voluptatum magnam possimus placeat
        vel similique nemo. Aliquam natus facilis a distinctio nihil maxime
        voluptatum iusto vero id tenetur!
      </p>
    </section>
  );
};

export default Hero;
