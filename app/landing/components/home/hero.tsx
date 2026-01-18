import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
          src="/images/img-basketball.svg"
          width={432}
          height={432}
          alt="basketball"
          className="absolute grayscale left-0 -top-20"
        />
        <div className=" relative ml-40 self-center">
          <div className="relative text-primary italic">Friday Sale, 50%</div>
          <h1 className="font-extrabold italic text-[90px] leading-tigth bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-8">
            <Button>
              Explore Now <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="watch video"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.svg"
          alt="hero image"
          width={700}
          height={950}
          className="absolute -right-5 top-1/2 -translate-y-1/2"
        />
      </div>
      <Image
        src="/images/img-ornament-hero (1).svg"
        width={200}
        height={200}
        alt="ornamet"
        className="absolute -right-0 top-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default HeroSection;
