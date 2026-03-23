"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";
import { useRef } from "react";
export default function Properties() {
  const { properties, loading, error } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 150;
const topRef = useRef(null);
  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  const totalItems = properties?.length || 0;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = properties?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

const handlePageChange = (page) => {
  setCurrentPage(page);

  setTimeout(() => {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-pink-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#DE1A58] border-r-[#c4164c] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Properties Available in Faridabad
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section  ref={topRef}
     className="bg-[#fdf2f6] px-3 sm:px-4 py-12 sm:py-16">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          Premium Residential House For Rent Properties in Faridabad
        </h1>

        <p className="mt-3 sm:mt-4 text-gray-500 max-w-2xl text-sm sm:text-base">
          Explore high-potential shops and commercial spaces available for rent 
          and investment across prime locations in Faridabad.
        </p>

        <div className="w-16 sm:w-20 h-1 bg-[#DE1A58] mt-4 sm:mt-6 rounded-full"></div>

        <div className="mt-6 sm:mt-8">
          <BHKFilterButtons />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">

          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              
<div className="flex flex-col md:flex-row">
                {/* IMAGE */}
                <div className="relative w-full md:w-[35%] h-48 md:h-auto">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#DE1A58] text-white text-xs px-3 py-1 rounded-full shadow font-medium">
                    {property.propertyType}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col">

                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* INFO BAR */}
                  <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl px-3 sm:px-5 py-3 flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-[10px]">
                        Area:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-[10px]">
                        Type:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-[10px]">
                        Status:
                      </span>
                      <span className="font-semibold text-[#DE1A58]">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>

                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                    {property.description2 ||
                      "High-value commercial asset offering strong rental potential and long-term growth."}
                  </p>

                  <div className="flex-1" />

                  {/* PRICE + BUTTONS */}
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-3 md:gap-4">

                    <p className="text-lg sm:text-2xl font-bold text-[#DE1A58]">
                      {property.price && property.price > 0
                        ? `₹ ${property.price.toLocaleString("en-IN")}`
                        : "Price on Call"}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-gradient-to-r from-[#DE1A58] to-[#a10f3f] 
                        text-white px-4 sm:px-6 py-2 rounded-full 
                        hover:from-[#c4164c] hover:to-[#7a0c2f] 
                        transition w-full md:w-auto text-center font-medium shadow-md text-sm"
                      >
                        Enquire Now
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#DE1A58] text-[#DE1A58] 
                        px-4 sm:px-6 py-2 rounded-full 
                        hover:bg-pink-50 
                        transition w-full md:w-auto text-center font-medium text-sm"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* PAGINATION */}
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-1 lg:sticky top-28">
          <SidebarEnquiryForm />
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