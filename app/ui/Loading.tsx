"use client";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading({ size = 50 }: { size?: number }) {
  return (
    <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 text-black dark:text-white">
      <AiOutlineLoading3Quarters size={size} className="animate-spin" />
    </div>
  );
}
