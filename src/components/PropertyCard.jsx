"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden flex flex-col h-full">

        {/* IMAGE */}
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={property?.media?.url || "/no-image.png"}
            unoptimized
            alt={property.title}
            width={400}
            height={250}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

          <span className="absolute top-3 left-3 bg-[#DE1A58] text-white text-xs px-3 py-1 rounded-full shadow font-medium">
            {property.propertyType}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">

          <h2 className="text-base font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {property.locality}
          </p>

          {/* STATS */}
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="bg-gray-50 rounded-lg p-2">
              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Area
              </span>
              <span className="font-semibold text-gray-900 text-sm">
                {formatArea(property.area, property.areaUnit)}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Type
              </span>
              <span className="font-semibold text-gray-900 text-sm">
                {property.propertyCategory}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Status
              </span>
              <span className="font-semibold text-[#DE1A58] text-sm">
                {property.status || "Ready to Move"}
              </span>
            </div>
          </div>

          {/* <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
            {property.description2 ||
              "High-value commercial asset offering strong rental potential and long-term growth."}
          </p> */}

          <div className="flex-1" />

          {/* PRICE + BUTTONS */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xl font-bold text-[#DE1A58] mb-3">
              {property.price && property.price > 0
                ? `₹ ${property.price.toLocaleString("en-IN")}`
                : "Price on Request"}
            </p>

            {/* BUTTON ROW */}
            {/* BUTTON ROW */}
<div className="flex gap-3">

  {/* ENQUIRE NOW */}
  <button
    onClick={() => setOpen(true)}
    className="w-1/2 bg-gradient-to-r from-[#DE1A58] to-[#a10f3f]
    text-white py-2.5 rounded-full
    hover:from-[#c4164c] hover:to-[#7a0c2f]
    transition text-sm font-medium shadow-md cursor-pointer text-center cursor-pointer"
  >
    Enquire Now
  </button>

  {/* VIEW DETAILS */}
  <Link
     href={`/properties/${property.slug}`}
  onClick={() => {
    localStorage.setItem("lastLocation", property.city);
  }}
    className="w-1/2 border border-[#DE1A58] text-[#DE1A58]
    py-2.5 rounded-full text-sm font-medium
    hover:bg-pink-50 transition cursor-pointer text-center"
  >
    View Details
  </Link>

</div>
          </div>

        </div>
      </div>

      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={property.title}
      />
    </>
  );
}