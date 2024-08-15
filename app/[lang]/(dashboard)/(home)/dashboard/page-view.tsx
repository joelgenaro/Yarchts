"use client";

interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">
          Admin Dashboard
        </div>
      </div>
    </div>
  );
};

export default DashboardPageView;
