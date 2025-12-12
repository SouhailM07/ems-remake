"use client";

import Lottie from "lottie-react";
import animation404 from "../../../../public/animations/404.json"; // ← IMPORT JSON

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Lottie
        animationData={animation404} // ← USE JSON OBJECT
        loop
        autoplay
        style={{ height: 500, width: 500 }}
      />
    </div>
  );
}
