import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="overflow-hidden h-20 shadow-md top-0 sticky">
      <div className="max-w-5xl bg-white h-full mx-auto">
        <div className="flex justify-between p-2 items-center h-full">
          <Link href="/">
            <a className="flex items-center space-x-1">
              <img
                src="https://raw.githubusercontent.com/Blankeos/cit214-productreviewapp/aa351811b2cae40c61b750bdb137b68cc3d0ea38/src/assets/imgs/cafely_logo.svg"
                alt="Cafely Logo"
                className="h-8 w-auto relative transform -translate-y-1"
              />
              <span className="font-light text-sm">| User Manual</span>
            </a>
          </Link>

          <div>
            <button
              onClick={() => {
                window.location.href = "https://cafely.vercel.app/";
              }}
              className="default-btn"
            >
              Visit Cafe.ly
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
