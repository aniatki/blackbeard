"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesComponent() {
  return (
    <div className="h-96 text-center relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("text-xl text-white  z-20")}>
        Call us at <a className="underline hover:text-gray-400" href="tel:+353830882425">+353 83 088 2425</a> <br />
        Or email at <a className="underline hover:text-gray-400" href="mailto:blackbeardireland@gmail.com">blackbeardireland@gmail.com</a> <br />
        Open from:
      </h1>
      <p className="text-center mt-2 text-neutral-300  z-20">
        Monday to Saturday 09:00 - 20:00
      </p>
      <p className="text-center mt-2 text-neutral-300  z-20">
        Sunday 11:00 - 17:00
      </p>
    </div>
  );
}
