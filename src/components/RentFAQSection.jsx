"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What types of rental properties are available on HouseForRentInFaridabad.com?",
    answer:
      "We list 1BHK, 2BHK, and 3BHK independent houses, builder floors, furnished & semi-furnished homes, and villas for rent across 50+ localities in Faridabad including Sainik Colony, Neharpar, NIT, Ballabhgarh, Greenfield Colony, and more.",
  },
  {
    question:
      "Is brokerage charged for renting a house through this platform?",
    answer:
      "No. HouseForRentInFaridabad.com is a zero-brokerage platform. We connect tenants directly with property owners, saving you one month's rent as brokerage fees.",
  },
  {
    question: "What is the average rent for a house in Faridabad?",
    answer:
      "Average monthly rent in Faridabad ranges from ₹5,000–₹9,000 for 1BHK, ₹9,000–₹18,000 for 2BHK, and ₹15,000–₹30,000+ for 3BHK depending on location, furnishing, and floor.",
  },
  {
    question:
      "Which areas in Faridabad are best for renting a house?",
    answer:
      "Top areas for house rentals in Faridabad include Sainik Colony, Neharpar (Sector 82–88), NIT, Greenfield Colony, Ballabhgarh, Sector 11, SGM Nagar, Dabua Colony, and Bharat Colony.",
  },
  {
    question: "How do I book a free site visit?",
    answer:
      "Simply fill in the enquiry form on our homepage or on any listing page. Our property consultant will call you within 24 hours to schedule a free site visit at a time convenient to you.",
  },
  {
    question: "Are all listings on the website verified?",
    answer:
      "Yes, all rental listings on HouseForRentInFaridabad.com are manually verified by our team to ensure accuracy of details, photos, and owner information before being published.",
  },
  {
    question:
      "Can I find furnished houses for rent in Faridabad?",
    answer:
      "Yes. We have a wide range of semi-furnished and fully furnished houses for rent in Faridabad with amenities such as AC, geyser, modular kitchen, wardrobe, and Wi-Fi connectivity.",
  },
  {
    question:
      "Is Faridabad well-connected to Delhi and Gurugram?",
    answer:
      "Yes. Faridabad is connected via the Delhi Metro Violet Line, NH-19, and Agra Canal Road, offering excellent connectivity to Delhi, Gurugram, Noida, and other NCR cities.",
  },
  {
    question:
      "What documents are needed to rent a house in Faridabad?",
    answer:
      "Typically, tenants need Aadhaar card, PAN card, 2-3 months' bank statement, passport-size photos, and employment/income proof. A formal rent agreement is registered at the local Sub-Registrar office.",
  },
  {
    question:
      "Does HouseForRentInFaridabad.com cover all areas of Faridabad?",
    answer:
      "Yes. We cover all major localities including Old Faridabad, New Faridabad (Neharpar), Ballabhgarh, NIT zones, and 50+ colonies, sectors, and villages across the city.",
  },
];

export default function RentFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className=" mb-14">
            {/* <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-[#DE1A58] text-sm font-semibold tracking-wide">
              FAQ'S
            </span> */}

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-5 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl  mt-5 leading-8">
              Everything you need to know before renting a house in Faridabad.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#DE1A58] shadow-2xl shadow-pink-100"
                      : "border-gray-200 hover:border-pink-300"
                  }`}
                >
                  <button
  onClick={() =>
    setOpenIndex(isOpen ? null : index)
  }
  className="w-full flex items-start justify-between gap-3 md:gap-6 px-4 md:px-8 py-5 md:py-7 text-left bg-white"
>
  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-7 md:leading-8 pr-2">
    {faq.question}
  </h3>

  <div
    className={`flex-shrink-0 w-10 h-10 md:min-w-[48px] md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
      isOpen
        ? "bg-[#DE1A58] text-white rotate-180"
        : "bg-pink-100 text-[#DE1A58]"
    }`}
  >
    <ChevronDown size={20} />
  </div>
</button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8">
                        <div className="h-px bg-pink-100 mb-6"></div>

                        <p className="text-gray-600 text-base md:text-lg leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}