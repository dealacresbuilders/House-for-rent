"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";
export default function Properties() {
  const { properties, loading, error } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  // ✅ Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 150;

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  // ✅ Pagination Logic
  const totalItems = properties?.length || 0;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = properties?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Smooth Scroll Top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    <section className="bg-[#fdf2f6] px-4 py-16">

      {/* PAGE HEADING */}
      <div className="max-w-7xl mx-auto  mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          Premium Residential House For Rent Properties in Faridabad
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl ">
          Explore high-potential shops and commercial spaces available for rent 
          and investment across prime locations in Faridabad.
        </p>

        <div className="w-20 h-1 bg-[#DE1A58]  mt-6 rounded-full"></div>
         <div className="mt-8">
    <BHKFilterButtons />
  </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}
                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#DE1A58] text-white text-xs px-4 py-1 rounded-full shadow font-medium">
                    {property.propertyType}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* STATS BAR */}
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Area:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Type:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-gray-300" />

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Status:
                      </span>
                      <span className="font-semibold text-[#DE1A58]">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "High-value commercial asset offering strong rental potential and long-term growth."}
                  </p>

                  <div className="flex-1" />

                  {/* PRICE + BUTTONS */}
                  <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">

                    <p className="text-2xl font-bold text-[#DE1A58]">
                      {property.price && property.price > 0
                        ? `₹ ${property.price.toLocaleString("en-IN")}`
                        : "Price on Call"}
                    </p>

                    <div className="flex gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-gradient-to-r from-[#DE1A58] to-[#a10f3f] 
                        text-white px-6 py-2 rounded-full 
                        hover:from-[#c4164c] hover:to-[#7a0c2f] 
                        transition w-full md:w-auto text-center font-medium shadow-md"
                      >
                        Enquire Now
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#DE1A58] text-[#DE1A58] 
                        px-6 py-2 rounded-full 
                        hover:bg-pink-50 
                        transition w-full md:w-auto text-center font-medium"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* ✅ PAGINATION */}
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1 sticky top-28">
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