"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#DE1A58]">
                House for Rent in Faridabad
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
              From independent floors to fully furnished homes — find a house 
              for rent in Faridabad that feels less like a compromise and more 
              like exactly what you were looking for.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#DE1A58] to-[#a10f3f]
                text-white shadow-lg hover:opacity-90 transition"
              >
                Find a House for Rent Now
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#DE1A58] text-[#DE1A58]
                hover:bg-pink-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT HIGHLIGHT CARD (STATS) */}
          <div className="bg-white border border-pink-100 rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#DE1A58]">
              1800+
            </h3>
            <p className="text-gray-600 mt-2">
              Houses & Floors Listed for Rent
            </p>

            <div className="h-px bg-pink-200 my-8"></div>

            <h3 className="text-4xl font-bold text-[#DE1A58]">
              4000+
            </h3>
            <p className="text-gray-600 mt-2">
              Tenants & Families Successfully Housed
            </p>

            <div className="h-px bg-pink-200 my-8"></div>

            <h3 className="text-4xl font-bold text-[#DE1A58]">
              65+
            </h3>
            <p className="text-gray-600 mt-2">
              Localities Covered Across Faridabad
            </p>

          </div>
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Renting a house is a very personal decision — and yet most platforms 
            treat it like a simple transaction. We think differently. Our mission 
            is to give every tenant, every relocating family, and every working 
            professional moving to Faridabad a platform that genuinely understands 
            what they need — a clean, verified, and honest listing of houses 
            available for rent so they can find the right home without the stress, 
            the wasted trips, or the broker pressure.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            From independent floors and builder floors in established localities 
            like NIT Faridabad and Sector 15, 16, 21 to spacious furnished and 
            semi-furnished homes in fast-growing areas like Neharpar and Ballabhgarh — 
            we cover the full spectrum of rental housing across Faridabad so every 
            tenant finds a home that truly fits their life.
          </p>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl p-10 border border-pink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Houses, Floors & More
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Independent houses, builder floors, independent floors, furnished 
                and semi-furnished options — we list every type of rental home so 
                you never have to settle for something that does not quite fit.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-10 border border-pink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Verified & Honestly Listed
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every rental listing on our platform is verified for accuracy 
                and current availability — so you only spend your time on homes 
                that are genuinely ready to move into right now.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl p-10 border border-pink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Owners, Find Reliable Tenants Fast
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Post your house, floor, or furnished property in minutes and 
                reach thousands of genuine tenants — families, professionals, 
                and relocating individuals — actively searching for homes in 
                Faridabad today.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-[#DE1A58] to-[#a10f3f] rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Next Home in Faridabad is Already Waiting for You.
          </h2>

          <p className="text-pink-100 mb-10 max-w-2xl mx-auto">
            Browse verified houses, independent floors, and furnished rentals 
            across Faridabad's most sought-after localities — and find a home 
            you will actually be happy coming back to every day.
          </p>

          <Link
            href="/"
            className="bg-white text-[#DE1A58] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Find a House for Rent Now
          </Link>

        </div>

      </div>
    </section>
  );
}