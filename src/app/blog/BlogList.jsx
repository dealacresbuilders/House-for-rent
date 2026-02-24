"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const loading = false;
  const error = null;

  const blogs = [
    {
      _id: "1",
      Slug: "digital-marketing-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      },
      HeroAltText: "Digital Marketing for Real Estate",
      Category: "Real Estate",
      Title: "How Digital Marketing Helps Real Estate Businesses Grow Faster",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "seo-tips-for-property-dealers",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      },
      HeroAltText: "SEO Tips for Property Dealers",
      Category: "SEO",
      Title: "Top SEO Tips Every Property Dealer Should Follow in 2024",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "social-media-for-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      HeroAltText: "Social Media Marketing for Real Estate",
      Category: "Social Media",
      Title: "Using Social Media to Generate Quality Property Leads",
      Date: "2024-03-18",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-16 bg-gradient-to-b from-white to-pink-50">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Insights &{" "}
          <span className="text-[#DE1A58]">Real Estate Updates</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay updated with expert strategies, SEO tips, and digital marketing
          insights to grow your real estate business faster.
        </p>

        <div className="w-20 h-1 bg-[#DE1A58] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ===== LOADING ===== */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-pink-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#DE1A58] border-r-[#c4164c] animate-spin"></div>
          </div>
        </div>
      )}

      {/* ===== ERROR ===== */}
      {error && !loading && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Unable to load blogs right now.
          </p>
        </div>
      )}

      {/* ===== BLOG GRID ===== */}
      {!loading && !error && blogs?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((post, index) => (
            <Link
              href={`/blog/${post.Slug}`}
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-pink-100 transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={post.HeroImg?.url}
                  alt={post?.HeroAltText}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="inline-block text-xs font-semibold bg-pink-100 text-[#DE1A58] px-3 py-1 rounded-full mb-3">
                  {post.Category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#DE1A58] transition-colors duration-300">
                  {post.Title}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {formatDate(post.Date)}
                </p>

              </div>

            </Link>
          ))}

        </div>
      )}

      {/* ===== EMPTY ===== */}
      {!loading && !error && blogs?.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          No blogs found.
        </div>
      )}

    </section>
  );
}