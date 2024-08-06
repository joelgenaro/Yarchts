import React from "react";
import { Search } from "lucide-react";
import { SiteLogo } from "@/components/svg";
import Link from "next/link";
const horizontalHeader = ({ handleOpenSearch }: { handleOpenSearch: () => void; }) => {
  return (
    <div className="flex items-center gap-3 lg:gap-12 ">
      <div>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-primary"
        >
          <SiteLogo className="h-7 w-7" />
          <span className="hidden text-xl font-semibold lg:inline-block">
            {" "}
            DashTail
          </span>
        </Link>
      </div>
      <button
        onClick={handleOpenSearch}
        className="inline-flex items-center hidden mr-2 text-sm lg:gap-2 lg:mr-0 text-default-600"
      >
        <span>
          <Search className="w-4 h-4 " />
        </span>
        <span className="hidden lg:inline-block"> Search...</span>
      </button>
    </div>
  );
};

export default horizontalHeader;
