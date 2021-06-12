import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-sm text-primary">
      <div className="mx-auto max-w-5xl p-10 sm:p-5">
        <div className="flex justify-between w-full">
          <div className="bg-white rounded-full sm:hidden">
            <img
              className="w-full h-full"
              src="https://raw.githubusercontent.com/Blankeos/cit214-productreviewapp/aa351811b2cae40c61b750bdb137b68cc3d0ea38/src/assets/imgs/cafely-graphic-logo.svg"
            />
          </div>
          <div className="flex justify-evenly flex-col items-end text-right space-y-5 sm:flex-row sm:w-full">
            {/* Footer Content Left */}
            <div className="flex space-x-5">
              <div className="bg-white rounded-full hidden sm:block">
                <img
                  className="w-16 h-16"
                  src="https://raw.githubusercontent.com/Blankeos/cit214-productreviewapp/aa351811b2cae40c61b750bdb137b68cc3d0ea38/src/assets/imgs/cafely-graphic-logo.svg"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold mb-1 text-base">Cool Stuff</h3>
                <Link href="https://github.com/seajayrubynose/cafely-manual">
                  User Manual
                </Link>
                <Link href="https://github.com/seajayrubynose/cafely-manual">
                  Dev Journal
                </Link>
              </div>
            </div>
            {/* Footer Content Right */}
            <div className="flex flex-col">
              <h3 className="font-bold mb-1 text-base">Links</h3>
              <Link href="https://github.com/seajayrubynose/cafely-manual">
                GitHub Source Code
              </Link>
              <Link href="https://github.com/seajayrubynose/cafely-manual">
                Visit Cafe.ly
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
