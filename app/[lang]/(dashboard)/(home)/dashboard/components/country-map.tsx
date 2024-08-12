"use client";

import Image from "next/image";
import img1 from "@/public/images/country/usa.png";
import img2 from "@/public/images/country/france.png";
import img3 from "@/public/images/country/india.png";
import img4 from "@/public/images/country/spain.png";
import img5 from "@/public/images/country/bangladesh.png";
import img6 from "@/public/images/country/brazil.png";

// import world from "../../../(map)/maps-vector/worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import Link from "next/link";

const CountryMap = () => {
  const country = [
    { name: "United State", image: img1, user: 32900 },
    { name: "France", image: img2, user: 30456 },
    { name: "India", image: img3, user: 29703 },
    { name: "Spain", image: img4, user: 27533 },
    { name: "Bangladesh", image: img5, user: 27523 },
    { name: "Brazil", image: img6, user: 23289 },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-6">
      <div className="col-span-12 md:col-span-8">
        <div className={`w-[full] h-[329px]`}>
          {/* <VectorMap
            // {...world}
            className="object-fill w-full h-full dashtail-codeVmapWhite"
          /> */}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 mt-9 md:mt-0">
        <div className="flex items-center justify-between pb-2 border-b">
          <div className="text-base font-semibold text-default-900">
            Top Countries
          </div>
          <Link
            href="/dashboard"
            className="text-xs font-medium text-primary hover:underline"
          >
            See All
          </Link>
        </div>
        <div className="py-5">
          {country.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center flex-wrap pb-3.5"
            >
              <div className="flex items-center gap-3">
                <div className="inline-block overflow-hidden rounded-full w-9 h-9">
                  <Image
                    className="object-cover w-full h-full"
                    src={item.image}
                    alt="spain"
                  />
                </div>
                <span className="inline-block text-sm font-medium text-default-600">
                  {item.name}
                </span>
              </div>
              <div className="text-sm text-default-600 bg-default-100 dark:bg-default-50 py-1.5 px-1.5 rounded">
                {item.user}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryMap;
