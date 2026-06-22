"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

// ✅ CLEAN SLUG
const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 50;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#0f0f1a] pt-16 pb-8 px-4 border-t border-[#1c1c2b]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            House for Rent in <span className="text-[#DE1A58]">Faridabad</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium rental homes and high-value residential opportunities across prime sectors of Faridabad.
          </p>
        </div>

        {/* LOCATIONS */}
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Locations
          </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm overflow-visible">
          {visibleLocations.map((loc, index) => (
            <div key={index} className="relative group overflow-visible">

              <Link
  key={index}
  href={`https://www.dealacres.com/properties/house-for-rent-in-${createSlug(loc)}-faridabad`}
  target="_blank"
  rel="noopener noreferrer"                 className="block truncate text-gray-400 hover:text-[#DE1A58] transition duration-300"
              >
                House For Rent {loc}
              </Link>

              <div
                className="
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                opacity-0 scale-95
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
                whitespace-nowrap
                bg-[#1a1333] text-white text-xs
                px-3 py-1.5 rounded-md
                shadow-lg border border-[#DE1A58]/40
                z-[9999]
                pointer-events-none
              "
              >
                House For Rent {loc}
              </div>

            </div>
          ))}

          {!showAll && locations.length > initialCount && (
            <div>
              <span
                onClick={() => setShowAll(true)}
                className="block cursor-pointer text-[#DE1A58] hover:underline"
              >
                Read More...
              </span>
            </div>
          )}

          {showAll && locations.length > initialCount && (
            <div>
              <span
                onClick={() => setShowAll(false)}
                className="block cursor-pointer text-[#DE1A58] hover:underline"
              >
                Read Less...
              </span>
            </div>
          )}

        </div>
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#1c1c2b] pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    
    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-400 hover:text-[#DE1A58] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#DE1A58] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#DE1A58] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#DE1A58] transition"
      >
        How It's Work
      </Link>
    </div>

  </div>
</div>
        {/* BOTTOM */}
        <div className="border-t border-[#1c1c2b] pt-6 flex flex-col md:flex-row items-center justify-between mt-10">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} HouseForRentInFaridabad.com - All rights reserved.
          </p>

         <p className="text-sm text-gray-500 mt-3 md:mt-0">
  Designed By - {" "}
  <Link
    href="https://www.parcharmanch.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#DE1A58] transition cursor-pointer underline-offset-4 hover:underline"
  >
    Parchar Manch
  </Link>
</p>
        </div>

      </div>
    </footer>
  );
}