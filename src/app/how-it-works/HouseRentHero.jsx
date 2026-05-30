"use client";
import Breadcrumb from "@/components/Breadcrumb";


export default function HouseRentHero() {
  return (
    <section className="w-full bg-[#fdf2f6] py-8 px-6 md:px-16 relative overflow-hidden">
    <div className="mb-6 flex justify-center">
   <Breadcrumb />
  </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DE1A58]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative">

        {/* MAIN TITLE */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#DE1A58] leading-tight mb-6">
          House for Rent in Faridabad – Complete Guide to Finding the Perfect Home
        </h1>

        {/* INTRO HEADING */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#DE1A58] mb-4">
          Introduction: Finding the Right House Can Be Hard
        </h2>

        {/* INTRO TEXT */}
        <p className="text-gray-700 leading-relaxed mb-10">
          Finding a house for rent in Faridabad is not always easy. Many people face problems like fake listings, high brokerage fees, and too many options that create confusion. Some listings are not real. Some agents do not give full information. This makes people lose time, money, and trust.
        </p>

        {/* FLOATING CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/70 backdrop-blur border border-[#DE1A58]/10 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700">
              But things are changing now.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur border border-[#DE1A58]/10 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700">
              Today, you can find all properties in one place without running around. You can talk directly to the owner.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur border border-[#DE1A58]/10 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700">
              You can check real and trusted listings. This makes the process simple and safe.
            </p>
          </div>

        </div>

        {/* FINAL TEXT */}
        <p className="text-gray-700 mb-10">
          This guide will help you understand everything about renting a house in Faridabad and how to do it in the easiest way.
        </p>

        

      </div>
    </section>
  );
}