
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import Properties from "@/components/Proprtes";
import HouseRentContent from "@/components/HouseRentContent";
import RentFAQSection from "@/components/RentFAQSection";
export default function Home() {
  return (
    <>
     <Hero/>
     <Properties/>
     <HouseRentContent/>
     <RentFAQSection/>
    </>
  );
}
