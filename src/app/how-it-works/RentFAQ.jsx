"use client";

import { useState } from "react";

export default function RentFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "1. How can I find a house for rent in Faridabad easily?",
      a: "You can use online property platforms that show all listings in one place. Choose websites that offer verified listings and direct owner contact. This helps you save time and avoid fake listings. Always filter based on your budget and preferred location.",
    },
    {
      q: "2. What is the average rent in Faridabad?",
      a: "The rent depends on location and size. A 1 BHK can cost ₹6,000–₹12,000, while a 2 BHK can range from ₹10,000–₹20,000. Larger homes cost more. Checking multiple options helps you find affordable houses in Faridabad.",
    },
    {
      q: "3. Is it safe to rent a house without an agent?",
      a: "Yes, if you use a trusted platform. Direct buyer-seller interaction reduces fraud and saves brokerage. Make sure the listing is verified and documents are checked before finalizing.",
    },
    {
      q: "4. Which is the best area for renting in Faridabad?",
      a: "Sectors like 15, 21, and Greater Faridabad are popular. These areas have good connectivity and facilities. Your choice should depend on your budget and daily needs.",
    },
    {
      q: "5. What documents are needed to rent a house?",
      a: "You need ID proof, address proof, and photos. Some owners may ask for job proof. These documents are required for most rental agreements.",
    },
    {
      q: "6. Are furnished houses available in Faridabad?",
      a: "Yes, you can find semi-furnished and fully furnished houses. Fully furnished homes are ready to move but cost more. Choose based on your budget.",
    },
    {
      q: "7. How do I avoid fake listings?",
      a: "Always use platforms with verified listings. Check property details carefully. Visit the property before paying any money. Avoid deals that look too cheap.",
    },
    {
      q: "8. Can I list my property for free?",
      a: "Yes, many platforms offer free property listing. This helps owners reach more people without paying extra cost. It also increases chances of finding tenants faster.",
    },
    {
      q: "9. What are the benefits of direct owner contact?",
      a: "Direct contact saves brokerage fees. It also makes communication clear and quick. You can negotiate rent easily and understand property details better.",
    },
    {
      q: "10. Is Faridabad a good place for renting?",
      a: "Yes, Faridabad is growing fast. It offers affordable homes, good connectivity, and peaceful living. That’s why demand for house rent in Faridabad is increasing.",
    },
  ];

  return (
    <section className="w-full bg-[#fdf2f6] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#DE1A58] mb-10 ">
          FAQs
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition duration-300 overflow-hidden
              ${
                open === i
                  ? "border-[#DE1A58] shadow-lg"
                  : "border-[#DE1A58]/10 hover:shadow-md"
              }`}
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.q}
                </span>

                <span
                  className={`text-xl font-bold transition ${
                    open === i
                      ? "text-[#DE1A58] rotate-180"
                      : "text-[#DE1A58]/70"
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-[300px] py-4 border-t border-[#DE1A58]/10" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.a}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}