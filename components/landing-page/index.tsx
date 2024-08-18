"use client";
import Hero from "./hero";
import { useMounted } from "@/lib/hooks/use-mounted";
import LayoutLoader from "@/components/layout-loader";

const LandingPageView = () => {
  const mounted = useMounted();
  if (!mounted) {
    return <LayoutLoader />;
  }
  return (
    <div className="bg-background">
      <Hero />
    </div>
  );
};

export default LandingPageView;
