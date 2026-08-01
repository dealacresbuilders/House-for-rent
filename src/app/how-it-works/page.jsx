import HouseRentHero from "./HouseRentHero";
import RentFAQ from "./RentFAQ";
import RentSectionsUnique from "./RentSectionsUnique";

// ✅ SEO METADATA
export const metadata = {
  title: " How It Works | Easy Steps to Rent a House in Faridabad",

  description:
    " Renting a house in Faridabad is now hassle-free. Search verified rental listings, schedule a free site visit & move into your dream home in Faridabad in just a few simple steps. Zero brokerage. No hidden charges.",

  keywords: [
    "how to rent house in Faridabad", "house renting process Faridabad", "rental home steps Faridabad", "house booking on rent Faridabad", "rental guide Faridabad", "rent independent house Faridabad", "no brokerage house rent Faridabad", "verified rental homes Faridabad", "rent agreement Faridabad", "easy house rental Faridabad"
  ],
  alternates: {
    canonical:
      "https://www.houseforrentinfaridabad.com/how-it-works",
  },
   robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <HouseRentHero />
      <RentSectionsUnique />
      <RentFAQ />
    </>
  );
}