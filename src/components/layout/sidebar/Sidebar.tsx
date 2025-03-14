import React from "react";
import NavItem from "./navitem";
import HorizontalLogo from "../../../assets/wouessi_logo_horizontal.svg";
import Home from "../../../assets/sidebar/home.svg";
import Chart from "../../../assets/sidebar/chart.svg";
import Card from "../../../assets/sidebar/card.svg";
import BenchmarkingIcon from "../../../assets/sidebar/benchmarking.svg";

const navItems = [
  { icon: Home, label: "Dashboard", to: "/" },
  { icon: Chart, label: "Lead Generation", to: "/lead-generation" },
  { icon: Card, label: "Capability Assessment", to: "/capability-assessment" },
  { icon: BenchmarkingIcon, label: "Benchmarking", to: "/benchmarking" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[#F1EEF8] w-80 h-screen shadow-md">
      <header className="m-12 pb-12 flex justify-center items-center border-b border-gray-200">
        <a href="/">
          <img src={HorizontalLogo} alt="Logo" className="h-12 w-full" />
        </a>
      </header>
      <nav>
        {navItems.map(({ icon, label, to }) => (
          <NavItem key={to} icon={icon} label={label} to={to} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
