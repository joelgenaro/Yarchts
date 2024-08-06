"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeChange from "./theme-change";
import SidebarChange from "./sidebar-change";
import SidebarImage from "./sidebar-image";
import SelectLayout from "./select-layout";
import SelectTheme from "./select-theme";
import HeaderStyle from "./header-style";
import FooterStyle from "./footer-style";
import RtlSwitcher from "./rtl-switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import RadiusInit from "./radius";
import { Settings } from "@/components/svg";
import Link from "next/link";
import { useThemeStore } from "@/store";

const ThemeCustomize = ({
  trigger = (
    <div className="fixed z-50 hidden ltr:right-4 rtl:left-4 bottom-14">
      <Button size="icon" className="relative w-12 h-12 rounded-full ">
        <Settings className="h-7 w-7 animate-spin" />
      </Button>
    </div>
  ),
}) => {
  const { isRtl } = useThemeStore();

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={isRtl ? "left" : "right"}
        overlayClass=" bg-transparent backdrop-blur-none"
        className="w-full max-w-full px-6 pt-0 pb-6 lg:w-3/4 md:max-w-sm"
      >
        <SheetHeader className="px-6 py-4 -mx-6 border-b shadow-sm  text-start md:shadow-none">
          <SheetTitle className="text-base font-medium ">
            Theme Customizer
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-120px)] -mx-6 px-6">
          <div className="mt-3 space-y-8 ">
            <SelectLayout />
            <SelectTheme />
            <RtlSwitcher />
            <ThemeChange />
            <SidebarChange />
            <SidebarImage />
            <RadiusInit />
            <HeaderStyle />
            <FooterStyle />
          </div>
        </ScrollArea>
        <SheetFooter className="justify-between hidden gap-3 py-4 lg:flex ">
          <Button asChild className="w-full">
            <Link href="https://1.envato.market/vNaJR3">Buy Now</Link>
          </Button>
          <Button asChild className="w-full">
            <Link
              href="https://themeforest.net/user/codeshaperbd/portfolio"
              target="__blank"
            >
              Our Portfolio
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeCustomize;
