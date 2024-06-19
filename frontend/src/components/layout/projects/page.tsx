import React from "react";
import FeatureCard10 from "../../magicui/animated-feature-card-5";
import FeatureCard4 from "../../magicui/animated-feature-card-4";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../../ui/button";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const Projects = () => {
  return (
    <>
      <section className="mx-48 mt-36">
        <FeatureCard10 />
      </section>

      <section className="flex gap-4 mx-48 mt-36" id="projects">
        <FeatureCard4 />
        <FeatureCard4 />
        <FeatureCard4 />
      </section>

      <section className="flex gap-4 mx-48 mt-4 relative mb-64">
        <FeatureCard4 />
        <FeatureCard4 />
        <FeatureCard4 />

        <div className="top-10 absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-80% dark:to-black">
          <div className="mt-32 text-center">
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto size-16 text-black dark:text-white lg:size-24"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
                <path d="m18 15-2-2"></path>
                <path d="m15 18-2-2"></path>
              </svg>
            </div>

            <h1 className="text-3xl mt-10 font-bold lg:text-4xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>

            <p className="mt-4 text-gray-500 ">
              Lorem ipsum dolor consectetur adipisicing elit. Similique, illum!
            </p>
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative w-full  overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black max-w-[250px] mx-auto mt-4 flex gap-4"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>
                  <span className="mr-2">✨</span> Get started
                </span>
                <ChevronRight className="ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
