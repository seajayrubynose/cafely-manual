import Link from "next/link";
import React from "react";

interface SideNavProps {
  links: [{ slug: string; title: string }];
}

const SideNav = ({ links }: SideNavProps) => {
  return (
    <div className="bg-primary p-5 pt-16 flex-grow flex-shrink-0 w-56">
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
        {/* <li className="hover:text-yellow-300">Logging In To Your Account</li>
        <li className="hover:text-yellow-300">Change Account Info</li>
        <li className="hover:text-yellow-300">Signing Out</li>
        <li className="hover:text-yellow-300">Viewing Other User's Profiles</li>
        <li className="hover:text-yellow-300">Sharing Your Profile</li>
        <li className="hover:text-yellow-300">Submitting A Review</li>
        <li className="hover:text-yellow-300">Searching for Products</li>
        <li className="hover:text-yellow-300">Adding A Product</li> */}
      </ul>
    </div>
  );
};

export default SideNav;
