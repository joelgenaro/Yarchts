import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScreenShot from "@/public/images/landing-page/screenshot.png";
import DashboardSceenshot from "@/public/images/landing-page/dashboard-screenshot.png";
import ProfileScreenShot from "@/public/images/landing-page/profile-screenshot.png";
import CalenderScreenshot from "@/public/images/landing-page/calender-screenshot.png";

const Hero = () => {
  return (
    <section
      className="bg-[url(https://dashboi-one.vercel.app/images/home/hero-bg.png)] bg-cover bg-no-repeat relative"
      id="home"
    >
      <div className="bg-gradient-to-b from-primary/30 to-[#fff] dark:from-primary/20 dark:to-[#0F172A]">
        <div className="container">
          <div className="relative z-10 h-screen">
            <div className="pt-32 md:pt-48">
              <div className="flex justify-center gap-4 mt-9 lg:gap-8">
                <Button asChild size="xl">
                  <Link href="/dashboard"> Dashboard </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
