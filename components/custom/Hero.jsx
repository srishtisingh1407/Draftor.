import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="px-10 mt-24 md:px-28 lg:px-44 xl:px-54 flex flex-col items-center " >
      <h2 className="font-bold text-5xl uppercase text-text">
        AI Powered Email Templates
      </h2>
      <p className="text-center mt-4">
        Want to create impressive AI-powered emails but don’t have the time? Use
        our AI-generated email templates, <br />complete with professional imagery and
        compelling copy, to save time and streamline your email production
        process.
      </p>
      <div className="flex gap-5 mt-10">
        <Button className="bg-button font-medium hover:bg-button hover:text-black">Try Demo</Button>
        <Button className="bg-button font-medium hover:bg-button hover:text-black">Get Started</Button>
      </div>

      <Image src={'/landing.png'} height={800} width={1000} alt="landing-page" className="mt-12"/>



    </div>
  );
}

export default Hero;
