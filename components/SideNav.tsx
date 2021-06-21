import Link from "next/link";
import React from "react";

interface SideNavProps {
  additionalClass?: string;
  links: [{ slug: string; title: string }];
}

const SideNav = ({ additionalClass, links }: SideNavProps) => {
  return (
    <div
      className={`overflow-y-scroll bg-primary p-5 pt-16 flex-grow flex-shrink-0 w-56" ${additionalClass}`}
      style={{
        boxShadow: "7px 0px 20px 0px rgba(50, 50, 50, 0.20);",
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
    </div>
  );
};

export default SideNav;
