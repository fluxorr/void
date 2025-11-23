import Navbar from "./navbar";
import Hero from "./Hero";
import TrustedBy from "./trusted-by";
import Features from "./features";
import Image from "next/image";

import mountain from "./assets/mountain.png";
import Benefits from "./benefits";
import SpecsSection from "./specs-section";

const ModernLanding = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <section className="flex justify-center items-center mx-32 my-24">
        <Image
          className="w-[calc(100%-20px)]"
          alt="mountain view"
          src={mountain.src}
          width={1200}
          height={620}
        />
      </section>
      <Benefits />
      <SpecsSection />
    </div>
  );
};

export default ModernLanding;
