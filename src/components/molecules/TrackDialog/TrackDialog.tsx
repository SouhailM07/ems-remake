"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TrackDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          Track Your Item
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg bg-white rounded-xl shadow-xl p-6 relative">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/mnt/data/2354f1a8-e2f8-4050-834f-58c61ba934a9.png"
              alt="search icon"
              width={64}
              height={64}
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Follow your Item
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Enter your tracking number below to track your shipment in real
            time.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-col gap-4">
          <Input
            placeholder="Examples (EE001204742DZ, EH010283045US, ED04030611116, EC07130074516)"
            className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
            Search
          </Button>
        </div>

        <DialogClose className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          ✕
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
