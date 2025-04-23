"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Apps = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 100, 0, 0]
  );

  //
  const wrapper = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const list = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955] },
    },
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0, translateX: 100 },
    visible: (i: any) => {
      const delay = 1 + i * 5;
      console.log(delay, i);
      return {
        pathLength: 1,
        opacity: 1,
        translateX: 0,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.div
      style={{ opacity, translateX }}
      ref={scrollRef}
      className="relative"
    >
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24 lg:gap-x-40">
        <div className="flex flex-col items-center gap-8">
          <p className="text-white">Techy works everywhere:</p>
          <div className="flex w-full justify-around md:justify-between">
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/node.webp"
              width={114}
              height={102}
              alt="Node"
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/deno.png"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/bun.png"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/logo-4.png"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/chrome.webp"
              alt="Node"
              width={114}
              height={102}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-white">And with everything:</p>
          <div className="flex w-full justify-around md:justify-between">
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/react.webp"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/logo-2.png"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/vite.webp"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/next.png"
              alt="Node"
              width={114}
              height={102}
            />
            <Image
              className="h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
              src="/images/logo-5.png"
              alt="Node"
              width={114}
              height={102}
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute inset-x-0 bottom-0 h-96 overflow-hidden"
      >
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[50px] w-full bg-rose-500/30 blur-3xl"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[75px] w-2/3 bg-rose-500/40 blur-3xl"></div>
      </motion.div>

      <hr className="w-full border-none h-px bg-gradient-to-r from-rose-700/0 via-rose-700/25 to-rose-700/0" />
    </motion.div>
  );
};

export default Apps;
