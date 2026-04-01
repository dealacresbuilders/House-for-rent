"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative px-4 sm:px-6 py-16
      bg-gradient-to-br from-[#1a0c12] via-[#2a0f1a] to-[#0f0f1a]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            House for Rent in{" "}
            <span className="text-[#DE1A58]">
              Faridabad
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-gray-300 leading-relaxed">
                   Finding a house for rent in Faridabad is now simpler, faster, and more reliable than ever. Faridabad has become one of the most preferred residential destinations in Delhi-NCR, offering a perfect mix of comfort, connectivity, and affordability. Whether you are a working professional, a growing family, or someone relocating for better opportunities, this city has rental homes that match every lifestyle and budget.<br/><br/>
      Our platform helps you discover verified and genuine listings, so your search for a house for rent in Faridabad stays transparent and stress-free. From independent houses to spacious builder floors in prime sectors, we bring you homes that feel right from day one.
    
          </p>
          <Link href="/house-for-rent">
  <button className="relative overflow-hidden bg-[#DE1A58] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-[#DE1A58] hover:shadow-xl hover:scale-105 mt-4">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>

        {/* RIGHT GLASS FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-2xl text-white">

            <h3 className="text-2xl font-semibold mb-2">
              Free Consultation
            </h3>

            <p className="text-sm mb-6 text-gray-400">
              Fill your details and our expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/20
                text-white placeholder-white/60
                focus:ring-2 focus:ring-[#DE1A58] focus:border-[#DE1A58]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/20
                text-white placeholder-white/60
                focus:ring-2 focus:ring-[#DE1A58] focus:border-[#DE1A58]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/20
                text-white placeholder-white/60
                focus:ring-2 focus:ring-[#DE1A58] focus:border-[#DE1A58]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold 
                bg-gradient-to-r from-[#DE1A58] to-[#a10f3f]
                hover:from-[#c4164c] hover:to-[#7a0c2f]
                transition duration-300 
                disabled:opacity-70 shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;