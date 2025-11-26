import Image from "next/image";

export default function AppAds() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
            TRACK YOUR SHIPMENTS VIA OUR MOBILE APPLICATION
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            EMS provides its customers with an all-in-one mobile solution for
            real-time tracking and monitoring, optimizing efficiency, accuracy,
            and transparency of delivery operations. The application is
            available for free on Google Play and Apple App Store.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4 mt-6">
            <Image
              src="/Icon-Google-Play.png"
              alt="Google Play"
              width={160}
              height={60}
              className="cursor-pointer hover:scale-105 transition"
            />
            <Image
              src="/Icon-APP-Store.png"
              alt="App Store"
              width={160}
              height={60}
              className="cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <Image
            src="/WhatsApp Image 2025-11-24 at 2.02.01 PM.jpeg"
            alt="Mobile App"
            width={900}
            height={900}
            className="w-full drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
