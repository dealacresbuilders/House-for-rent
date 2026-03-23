import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "House for Rent Blogs | Rental Tips, Property Guides & Investment Ideas",
    description:
      "Explore house for rent blogs with expert tips on renting homes, flats, and properties. Learn rental agreements, pricing trends, and smart property investment ideas.",
    keywords: [
      "house for rent blogs",
      "rental property tips",
      "flat rent guide",
      "home rental advice",
      "property investment ideas",
      "real estate rental blogs"
    ],
    alternates: {
      canonical: "www.houseforrentinfaridabad.com/blog", // 🔥 apna final domain yaha set kar dena
    },
  };
}

const page = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <BlogList />
    </div>
  );
};

export default page;