"use client";

import Link from "next/link";

export default function BHKFilterButtons() {
  const bhkOptions = ["1", "2", "3", "4"];

  // ✅ SLUG FUNCTION
  const createSlug = (bhk) => {
    return `${bhk}-bhk-house-for-rent`;
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      {bhkOptions.map((bhk) => (
        <Link
          key={bhk}
          href={`/listing/${createSlug(bhk)}`}
          className="px-3 sm:px-6 py-1.5 sm:py-3 rounded-full 
          text-xs sm:text-sm md:text-base font-medium 
          border border-[#a10f3f] text-[#a10f3f] 
          hover:bg-[#a10f3f] hover:text-white 
          transition-all duration-200 text-center whitespace-nowrap"
        >
          {/* 👇 Mobile */}
          <span className="sm:hidden">{bhk} BHK</span>

          {/* 👇 Desktop */}
          <span className="hidden sm:inline">
            {bhk} BHK House for Rent
          </span>
        </Link>
      ))}
    </div>
  );
}