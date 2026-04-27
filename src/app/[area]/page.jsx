import FilterProperties from "./FilterProperties";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawArea = resolvedParams?.area;

  const area = rawArea?.replace("house-for-rent-in-", "");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const locationName = formattedArea || "Faridabad";

  return {
    title: `Houses for Rent in ${locationName} | Rent Independent House & Villa`,

    description: `Find houses for rent in ${locationName}. Explore independent houses, villas, and rental homes including 1BHK, 2BHK, and 3BHK options with modern amenities and great connectivity in ${locationName}.`,

    keywords: [
      `houses for rent in ${locationName}`,
      `rent house ${locationName}`,
      `independent house rent ${locationName}`,
      `villa for rent ${locationName}`,
      `1BHK house rent ${locationName}`,
      `2BHK house rent ${locationName}`,
      `3BHK house rent ${locationName}`,
      `${locationName} rental homes`,
    ],

    alternates: {
      canonical: `https://www.houseforrentinfaridabad.com/${rawArea}`,
    },
  };
}
export default async function Page({ params }) {
  const resolvedParams = await params;
  const rawArea = resolvedParams?.area;

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("house-for-rent-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
           <div className="mb-6">
   <Breadcrumb />
  </div>
        {/* 🔥 DYNAMIC HEADING */}
        <div className=" mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
             House for rent in{" "}
            <span className="text-[#DE1A58]">
              {formattedArea || "Faridabad"}
            </span>
          </h1>

          <p className="text-gray-600 mt-3">
            Residential properties in prime business locations.
          </p>

          <div className="w-20 h-1 bg-[#DE1A58] mt-6 rounded-full"></div>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          
          <div className="lg:col-span-8 space-y-6">
  <FilterProperties area={area} />

  
</div>

         
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <SidebarEnquiryForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}