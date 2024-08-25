"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const IntroScreen = () => {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="intro-content p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-white text-lg md:text-3xl font-bold mb-4">
          Welcome to the Countries Map Application
        </h1>
        <div className="flex justify-center">
          <Image
            src="/world-traveler.gif"
            alt="World Traveler"
            width={400}
            height={300}
          />
        </div>
        <p className="text-white text-sm md:text-lg mt-4 mb-6">
          Explore countries around the world with interactive maps.
        </p>
        <button onClick={handleEnter} className="enter-button">
          Enter
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
