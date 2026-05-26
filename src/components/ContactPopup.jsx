"use client";

import { useState, useEffect } from "react";
import AlertPopup from "@/components/AlertPopup";

export default function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    message: "",
  });

  // ✅ AUTO CLOSE ALERT AFTER 2.5s
  useEffect(() => {
    if (popup.open) {
      const timer = setTimeout(() => {
        setPopup({ open: false, type: "", message: "" });
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [popup.open]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION
    if (formData.phone.length !== 10) {
      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be 10 digits",
      });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        propertyTitle,
        website: "houseforrentinfaridabad.com",
        source: "Popup Enquiry",
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setPopup({
          open: true,
          type: "success",
          message: "Enquiry submitted successfully!",
        });

        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        // close modal after success
        setTimeout(() => {
          onClose?.();
        }, 1200);

      } else {
        setPopup({
          open: true,
          type: "error",
          message: data.message || "Something went wrong!",
        });
      }

    } catch (err) {
      setPopup({
        open: true,
        type: "error",
        message: "Server error. Please try later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      {/* ALERT POPUP */}
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup({ open: false, type: "", message: "" })
        }
      />

      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-pink-100">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#DE1A58] text-xl transition"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-gray-900">
          Get Best Price Details
        </h2>

        <p className="text-sm text-gray-600 mt-3 mb-7">
          Enquiry for:
          <span className="block font-medium text-[#DE1A58] mt-1">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black
            focus:ring-2 focus:ring-[#DE1A58] focus:border-[#DE1A58]
            outline-none transition"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black
            focus:ring-2 focus:ring-[#DE1A58] focus:border-[#DE1A58]
            outline-none transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Write your requirement (budget, location, size, etc.)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black
            focus:ring-2 focus:ring-[#DE1A58] focus:border-[#DE1A58]
            outline-none resize-none transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 
            bg-gradient-to-r from-[#DE1A58] to-[#a10f3f] 
            hover:from-[#c4164c] hover:to-[#7a0c2f]
            text-white font-semibold rounded-xl 
            transition shadow-lg disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

        </form>

      </div>
    </div>
  );
}