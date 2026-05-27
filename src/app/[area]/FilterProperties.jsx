"use client";

import {
  useEffect,
  useState,
  useMemo,
  Fragment
} from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import FeaturedLocations from "@/components/FeaturedLocations";

export default function FilterProperties({ area }) {

  const { data, properties, loading2, error2, setLocality } = useProperty();

  // ✅ SAFETY FIX (null crash prevent)
  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  /* ================= 150 CARD LOGIC ================= */

  const finalData = useMemo(() => {

    // Agar full domain data hi nahi hai
    if (safeProperties.length === 0) {
      return safeData;
    }

    // Filtered IDs
    const filteredIds = new Set(
      safeData.map((p) => p._id)
    );

    // Remaining domain properties
    const remaining = safeProperties.filter(
      (p) => !filteredIds.has(p._id)
    );

    const needed = 150 - safeData.length;

    return [
      ...safeData,
      ...remaining.slice(0, needed > 0 ? needed : 0)
    ].slice(0, 150);

  }, [safeData, safeProperties]);


  const localities = useMemo(() => {
  return [
    ...new Set(
      finalData
        ?.map((item) => item?.locality)
        .filter(Boolean)
    ),
  ];
}, [finalData]);

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-pink-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#DE1A58] border-r-[#c4164c] animate-spin"></div>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Listings...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-pink-50 to-pink-50">
        <p className="text-red-500 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-pink-50">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Shops Available in {formattedArea}
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#fdf2f6] px-2 py-8">
      <div className="max-w-7xl mx-auto">



        {/* GRID */}
        <div className="grid grid-cols-1  gap-4">

          {finalData.map((property, index) => {

const featuredPosition =
  Math.floor(index / 30);

const locationBatch =
  (index + 1) % 30 === 0
    ? localities.slice(
        featuredPosition * 10,
        featuredPosition * 10 + 10
      )
    : [];

return (
<Fragment key={property._id}>
            <div
              className="bg-white rounded-2xl border border-pink-100
              shadow-sm hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="relative md:w-[45%] aspect-[4/3] md:aspect-auto overflow-hidden">
                
                  <Image
                   src={property?.media?.url ?
                      property?.media?.url
                      :"https://res.cloudinary.com/do84xjpmx/image/upload/v1778824611/faridabadProperties/egxss7fxugjkgg1bfdel.webp"
                    }
                    unoptimized
                    alt={property.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
              
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col w-full min-w-0">

                <h2 className="text-lg font-bold text-gray-900 overflow-hidden md:whitespace-nowrap md:text-ellipsis">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"
                    />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>

                  {property.locality}
                </p>

                {/* INFO BAR */}
                <div className="mt-4 bg-pink-50 border border-pink-200 rounded-xl px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">AREA</span>
                    <span className="font-semibold text-gray-900">
                      {formatArea(property.area, property.areaUnit)}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-pink-200"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">STATUS</span>
                    <span className="font-semibold text-[#DE1A58]">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-pink-200"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">TYPE</span>
                    <span className="font-semibold text-gray-900">
                      {property.propertyCategory}
                    </span>
                  </div>

                </div>

                {/* <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description2 ||
                    "Prime commercial shop ideal for business and long-term investment."}
                </p> */}

                <div className="flex-1" />

                {/* PRICE + LINK */}
                {/* PRICE + ACTIONS */}
                <div className="mt-5 flex justify-between items-center flex-wrap gap-3">

                  {/* PRICE */}
                  {property.price && property.price > 0 ? (
                    <p className="text-lg font-bold text-[#DE1A58]">
                      ₹ {property.price.toLocaleString("en-IN")}
                    </p>
                  ) : (
                    <span className="text-sm font-semibold text-[#DE1A58]">
                      Price on Call
                    </span>
                  )}

                  {/* BUTTON GROUP */}
                  <div className="flex items-center gap-3">

                    {/* ENQUIRE NOW BUTTON */}
                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-gradient-to-r from-[#DE1A58] to-[#a10f3f]
      text-white px-4 py-2 rounded-lg text-sm
      hover:from-[#c4164c] hover:to-[#7a0c2f]
      transition shadow-md cursor-pointer"
                    >
                      Enquire Now
                    </button>

                    {/* VIEW DETAILS */}
                    <Link
                            href={`/properties/${property.slug}`}
                        
                      className="text-[#DE1A58] text-sm font-medium hover:underline cursor-pointer pointer-events-none"
                    >
                      View Details →
                    </Link>

                  </div>
                </div>
              </div>
          </div>

{locationBatch.length > 0 && (
  <FeaturedLocations
    locations={locationBatch}
  />
)}

</Fragment>

);
})}

        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}