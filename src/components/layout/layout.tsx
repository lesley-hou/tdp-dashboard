import React, { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex">
      <aside className="w-80 h-screen fixed top-0 left-0 bg-[#F1EEF8] shadow-md">
        <Sidebar />
      </aside>
      <main className="flex-1 p-6 ml-80 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
