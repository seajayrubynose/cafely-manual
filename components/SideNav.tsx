import React from "react";

const SideNav: React.FC = () => {
  return (
    <div className="bg-primary p-5 pt-16 flex-grow w-64">
      <ul className="text-sm flex flex-col space-y-4 text-white">
        <li className="hover:text-yellow-300">Getting Started</li>
        <li className="hover:text-yellow-300">Logging In To Your Account</li>
        <li className="hover:text-yellow-300">Change Account Info</li>
        <li className="hover:text-yellow-300">Signing Out</li>
        <li className="hover:text-yellow-300">Viewing Other User's Profiles</li>
        <li className="hover:text-yellow-300">Sharing Your Profile</li>
        <li className="hover:text-yellow-300">Submitting A Review</li>
        <li className="hover:text-yellow-300">Searching for Products</li>
        <li className="hover:text-yellow-300">Adding A Product</li>
      </ul>
    </div>
  );
};

export default SideNav;
