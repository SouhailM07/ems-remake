"use client";
import MyDialog from "@/components/atoms/MyDialog/MyDialog";
import Autoplay from "embla-carousel-autoplay";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Hero() {
  // Orange (Logo stripes): #FF8F21

  // Dark Blue (EMS text): #213F98
  return (
    <section className="flex h-screen relative items-center justify-center">
      {/* TEXT CONTENT */}
      <article className="absolute z-[2] text-center px-6">
        <TypewriterEffectDemo />
        <div className="flex gap-4 justify-center mt-6">
          <MyDialog
            title="Track Your order"
            trigger={
              <button className="bg-[#213F98] hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                Track Your Parcel
              </button>
            }
          >
            <Input
              className="h-[3.2rem]"
              placeholder="مثال (EE001204742DZ, EH010283045US, ED04030611116, EC07130074516)"
            />
            <button className="text-white bg-[#FF8F21] hover:bg-orange-600 cursor-pointer rounded-md h-[3.2rem] text-lg">
              Submit
            </button>
          </MyDialog>
          <button className="bg-[#FF8F21]  hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
            Send a Shipment
          </button>
        </div>
      </article>

      {/* BACKGROUND IMAGE */}
      <article className="w-full h-full">
        <ThisCarousel />
      </article>
    </section>
  );
}

const ThisCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2800,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {["/IMG_6817.JPG", "/slide2.jpeg"].map((e, i) => (
          <CarouselItem key={i}>
            <Image
              src={e}
              alt="img"
              height={1800}
              width={1800}
              className="object-cover  w-full h-screen object-bottom brightness-[0.80]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

function TypewriterEffectDemo() {
  const words = [
    { text: "Delivering", className: "text-white" },
    { text: "Excellence", className: "text-white" },
    { text: "Across", className: "text-white" },
    { text: "Algeria", className: "text-[#FF8F21]" },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Typewriter Title */}
      <TypewriterEffect className="w-[40rem] " words={words} />

      {/* Subtitle */}
      <p className="text-white text-lg text-shadow-2xs md:text-xl mt-4 max-w-2xl mx-auto drop-shadow-md">
        Fast, reliable national & international shipping with EMS Champion Post
        Algeria.
      </p>
    </div>
  );
}
