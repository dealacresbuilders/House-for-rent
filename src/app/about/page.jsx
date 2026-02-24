"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50 px-4 py-24">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Commercial Property Platform in{" "}
              <span className="text-[#DE1A58]">
                Faridabad
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
              We connect serious investors and business owners with verified
              commercial shops in prime locations across Faridabad.
              Transparent listings. Real opportunities. Smart investments.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#DE1A58] to-[#a10f3f]
                text-white shadow-lg hover:opacity-90 transition"
              >
                Explore Properties
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

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-white border border-pink-100 rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#DE1A58]">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Verified Commercial Listings
            </p>

            <div className="h-px bg-pink-200 my-8"></div>

            <h3 className="text-4xl font-bold text-[#DE1A58]">
              1000+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Investors & Buyers
            </p>

          </div>
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Our mission is to simplify commercial property buying by providing
            accurate listings, transparent pricing, and verified investment
            opportunities in high-growth commercial hubs of Faridabad.
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
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#DE1A58] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every property is verified to ensure safe and reliable
                investment decisions.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-10 border border-pink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#DE1A58] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We focus on high-demand sectors with strong rental yield and
                resale potential.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl p-10 border border-pink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#DE1A58] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear pricing, no hidden charges, and full guidance from inquiry
                to final purchase.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-[#DE1A58] to-[#a10f3f] rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Next Investment?
          </h2>

          <p className="text-pink-100 mb-10 max-w-2xl mx-auto">
            Discover premium commercial shops in Faridabad and start building
            long-term returns today.
          </p>

          <Link
            href="/"
            className="bg-white text-[#DE1A58] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Browse Properties
          </Link>

        </div>

      </div>
    </section>
  );
}