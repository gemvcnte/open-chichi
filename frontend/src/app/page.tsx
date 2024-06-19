import React from "react";
import Image from "next/image";

import Hero from "../components/layout/hero/page";
import Projects from "../components/layout/projects/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}
