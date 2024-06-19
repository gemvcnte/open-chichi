"use client";

import React from "react";
import { Button, buttonVariants } from "../../ui/button";
import { ChevronRight } from "lucide-react";

import RetroGrid from "@/components/magicui/retro-grid";
import WordRotate from "@/components/magicui/word-rotate";

import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="text-center pt-48">
      <WordRotate
        className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
        words={["Lorem Ipsum", "Dolor Sit", "Amet Consectetur"]}
      />

      <p className="text-balance text-lg tracking-tight text-gray-400 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        alias aliquid?
      </p>

      <section className="flex gap-4 max-w-[500px] mx-auto mt-8">
        <Link
          href="#projects"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            }),
            "gap-2 whitespace-pre md:flex",
            "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
          )}
        >
          Browse Projects
          <ChevronRight className="ml-1  size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "outline",
            }),
            "gap-2 whitespace-pre md:flex",
            "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black "
          )}
        >
          Get Started
          <ChevronRight className="ml-1 size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </section>

      <RetroGrid className="-mt-[250px]" />
    </section>
  );
};

export default Hero;
