import logo from "@/public/images/logo/logo-1.png"
import { useSidebar } from "@/store";
import React from "react";
import {
  Img,
} from "@react-email/components";

const SidebarLogo = ({ hovered }: { hovered?: boolean }) => {
  const { sidebarType, setCollapsed, collapsed } = useSidebar();
  return (
    <div className="px-4 py-4 ">
      <div className="flex items-center ">
        <div className="flex items-center flex-1 gap-x-3 ">
          <Img className="text-primary"
            src={logo.src}
            alt="DashTail"
          />
        </div>
        {sidebarType === "classic" && (!collapsed || hovered) && (
          <div className="flex-none hidden lg:block">
            <div
              onClick={() => setCollapsed(!collapsed)}
              className={`h-4 w-4 border-[1.5px] border-default-900 dark:border-default-200 rounded-full transition-all duration-150
          ${collapsed
                  ? ""
                  : "ring-2 ring-inset ring-offset-4 ring-default-900  bg-default-900  dark:ring-offset-default-300"
                }
          `}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarLogo;
