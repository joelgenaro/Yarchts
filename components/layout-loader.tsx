"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import logo from "@/public/images/logo/logo-1.png"
import {
  Img,
} from "@react-email/components";

const LayoutLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2 ">
      <Img className="h-10 text-primary"
        src={logo.src}
        alt="DashTail"
      />
      <span className="inline-flex gap-1 ">
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Loading...
      </span>
    </div>
  );
};

export default LayoutLoader;
