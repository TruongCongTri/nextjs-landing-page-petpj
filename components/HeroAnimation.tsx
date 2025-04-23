"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
}
// eslint-disable-next-line react/display-name
const HeroAnimation = React.forwardRef<HTMLDivElement, Props>(
  ({ text, className, ...props }, ref) => {
    const item = {
      hidden: {
        y: "200%",
        opacity: 0,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.55,
        },
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.45,
        },
      },
    };

    const words = text.split(" ").map((word) => {
      const characters = word.split("");
      characters.push("\u00A0");
      return characters;
    });
    return (
      <div ref={ref} {...props}>
        {words.map((word, idx) => {
          return (
            <span
              key={idx}
              className="whitespace-nowrap"
              style={{ overflow: "hidden" }}
            >
              {word.map((element, charIdx) => (
                <span
                  key={charIdx}
                  style={{ overflow: "hidden", display: "inline-block" }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    variants={item}
                    className={cn("hello", className)}
                    style={{ display: "inline-block" }}
                  >
                    {element}
                  </motion.span>
                </span>
              ))}
            </span>
          );
        })}
      </div>
    );
  }
);
export default HeroAnimation;
