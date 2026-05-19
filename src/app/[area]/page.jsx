import FilterProperties from "./FilterProperties";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
import HisarMarketOverview from "./HisarMarketOverview";

// ✅ GET SEO DATA

async function getDealerMeta(
  slug
) {
  try {

    const domain =
      "www.houseforrentinfaridabad.com";

    const res =
      await fetch(
        `https://faridabad-backend.onrender.com/api/add/get-dealer-meta/${slug}?domain=${domain}`,
        {
          cache: "no-store",
        }
      );

    if (!res.ok)
      return null;

    const data =
      await res.json();

    return (
      data?.data || null
    );

  } catch (error) {

    console.log(error);

    return null;

  }
}

export async function generateMetadata({
  params,
}) {

  const resolvedParams =
    await params;

  const rawArea =
    resolvedParams?.area;

  // ✅ CLEAN SLUG

  const area =
    rawArea?.replace(
      "house-for-rent-in-",
      ""
    );

  // ✅ FORMATTED LOCATION

  const formattedArea =
    area
      ?.replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (c) =>
          c.toUpperCase()
      );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      area
    );

  // ✅ FALLBACK META

  const fallbackTitle =
    ` ${formattedArea}`;

  const fallbackDescription =
    `${formattedArea}`;

  return {
    title:
      seoData?.metaTitle ||
      fallbackTitle,

    description:
      seoData?.metaDescription ||
      fallbackDescription,

    alternates: {
      canonical:
        `https://www.houseforrentinfaridabad.com/${rawArea}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
}) {

  const resolvedParams =
    await params;

  const rawArea =
    resolvedParams?.area;

  // ✅ CLEAN SLUG

  const area =
    rawArea?.replace(
      "house-for-rent-in-",
      ""
    );

  // ✅ FORMATTED AREA

  const formattedArea =
    area
      ?.replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (c) =>
          c.toUpperCase()
      );

  // ✅ API CALL

  const seoData =
    await getDealerMeta(
      area
    );

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
      <HisarMarketOverview
  pageContent={
    seoData?.pageContent
  }
/>
      </div>
    </div>
  );
}