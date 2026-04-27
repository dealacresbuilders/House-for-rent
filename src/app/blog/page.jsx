import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "House Rental Blog | Renting Tips, Tenant Guide & Property News in Faridabad",
    description:
      "Read expert blogs on house renting tips in Faridabad, rental market trends, tenant rights, rent agreement guide, best localities to rent a house & property news to help you make the smartest rental decision.",
    keywords: [
      "house rental blog Faridabad", "renting tips Faridabad", "rental market trends Faridabad", "tenant rights India", "rent agreement guide Faridabad", "best localities to rent house Faridabad", "real estate news Faridabad", "affordable rental homes Faridabad", "house rent price trends Faridabad", "independent house rental checklist Faridabad"
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