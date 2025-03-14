import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  icon: string;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `flex mx-11 my-1 min-w-28 items-center p-2 rounded-lg transition-colors 
        ${isActive ? "bg-white" : "hover:bg-gray-100"}`
      }
    >
      {({ isActive }) => {
        const iconBgClass = isActive ? "bg-[#2703A5]" : "bg-white";
        const textClass = isActive ? "text-gray-900 font-bold" : "text-[#5C5C5D]";

        return (
          <>
            <div className={`p-2 mr-3 rounded-xl ${iconBgClass}`}>
              <img src={icon} alt={label} className="h-6 w-6" />
            </div>
            <span className={`ml-1 ${textClass}`}>{label}</span>
          </>
        );
      }}
    </NavLink>
  );
};

export default NavItem;
