import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface SideNavProps {
  additionalClass?: string;
  links: [{ slug: string; title: string }];
  isActive: boolean;
}

const SideNav = ({ additionalClass, links, isActive }: SideNavProps) => {
  const animation = useAnimation();

  const isMD = useMediaQuery({ query: "(min-width: 768px)" }); // based on tailwind

  const setAnim = () => {
    if (isActive) {
      animation.start({
        x: 0,
        transition: {
          ease: "circOut",
        },
      });
    } else {
      animation.start({
        x: "-100vw",
        transition: {
          ease: "circIn",
        },
      });
    }
  };

  useEffect(() => {
    setAnim();
  }, [isActive]);

  useEffect(() => {
    if (isMD) {
      animation.start({
        x: 0,
        transition: {
          ease: "circOut",
        },
      });
    } else {
      setAnim();
    }
  }, [isMD]);

  return (
    <motion.div
      animate={animation}
      className={`overflow-y-auto bg-primary p-5 pt-16 flex-grow flex-shrink-0 w-56" absolute z-10 h-full md:block md:relative md:h-auto ${
        ""
        // isActive && "hidden"
      }`}
      style={{
        boxShadow: "7px 0px 20px 0px rgba(50, 50, 50, 0.20)",
      }}
    >
      <ul className="text-sm flex flex-col space-y-4 text-white">
        {links &&
          links.map((link) => {
            return (
              <Link key={link.slug} href={`/manual/${link.slug}`}>
                <a>
                  <li className="hover:text-yellow-300">{link.title}</li>
                </a>
              </Link>
            );
          })}
      </ul>
    </motion.div>
  );
};

export default SideNav;
