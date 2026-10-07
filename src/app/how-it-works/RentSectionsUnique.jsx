"use client";

import Link from "next/link";

export default function RentSectionsUnique() {
  const sections = [
    // 🔥 SAME DATA (NO CHANGE)
    {
      title: " What Our Website Does",
      content: (
        <>
          <p>Our platform is made to make property search simple for everyone.</p>

          <p className="mt-2 font-medium">Here’s what we offer:</p>
          <ul className="list-disc pl-5">
            <li>You can find all types of rental properties in Faridabad in one place</li>
            <li>Every listing is real and verified</li>
            <li>You can directly connect with the owner (no middleman)</li>
            <li>You can list your property with free property listing</li>
            <li>We work with a trusted partner, RGR Group, to improve property reach and trust</li>
          </ul>

          <p className="mt-2">
            This means no confusion, no extra cost, and no stress.
          </p>
        </>
      ),
    },

    {
      title: "Why Faridabad is a Growing Rental Market",
      content: (
        <>
          <p>Faridabad is growing very fast. It is now one of the best places to live near Delhi.</p>

          <p className="mt-2">Reasons why people are choosing Faridabad:</p>
          <ul className="list-disc pl-5">
            <li>Good road and metro connectivity</li>
            <li>Lower rent compared to Delhi and Gurgaon</li>
            <li>Better space and peaceful living</li>
            <li>Growing job opportunities</li>
            <li>New residential projects</li>
          </ul>

          <p className="mt-2">
            Because of this, demand for house for rent in Faridabad is increasing every year.
          </p>
        </>
      ),
    },

    {
      title: "House vs Flat vs Builder Floor – What Should You Choose?",
      content: (
        <>
          <p>When searching for a house for rent in Faridabad, you will see different options.</p>

          <p className="mt-2">Here’s a simple comparison:</p>

          <p className="mt-2 font-semibold">Independent House</p>
          <p>More space</p>
          <p>Privacy</p>
          <p>Good for families</p>

          <p className="mt-2 font-semibold">Flat / Apartment</p>
          <p>Security and amenities</p>
          <p>Easy maintenance</p>
          <p>Good for working people</p>

          <p className="mt-2 font-semibold">Builder Floor</p>
          <p>Mix of both</p>
          <p>Moderate privacy</p>
          <p>Budget-friendly</p>

          <p className="mt-2">
            Choose based on your need, family size, and budget.
          </p>
        </>
      ),
    },

    {
      title: "Types of Houses for Rent in Faridabad",
      content: (
        <>
          <p>There are many types of homes available.</p>

          <p className="mt-2 font-semibold">1. 1 BHK House</p>
          <p>Best for singles or couples</p>
          <p>Low rent</p>

          <p className="mt-2 font-semibold">2. 2 BHK House</p>
          <p>Good for small families</p>
          <p>Balanced space and cost</p>

          <p className="mt-2 font-semibold">3. 3 BHK House</p>
          <p>Large space</p>
          <p>Ideal for big families</p>

          <p className="mt-2 font-semibold">4. Independent Houses</p>
          <p>Full privacy</p>
          <p>No shared walls</p>

          <p className="mt-2 font-semibold">5. Semi-Furnished Homes</p>
          <p>Basic setup available</p>

          <p className="mt-2 font-semibold">6. Fully Furnished Homes</p>
          <p>Ready to move</p>
          <p>Higher rent</p>

          <p className="mt-2">
            These options make it easier to find the right rental property in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Best Locations to Rent a House in Faridabad",
      isLocation: true,
      content: (
        <>
          <p>Some areas are very popular for renting.</p>

          <p className="mt-2 font-semibold">1. Sector 15</p>
          <p>Prime location</p>
          <p>Good schools and markets</p>

          <p className="mt-2 font-semibold">2. Sector 21</p>
          <p>Peaceful area</p>
          <p>Good connectivity</p>

          <p className="mt-2 font-semibold">3. Sector 37</p>
          <p>Affordable homes</p>
          <p>Growing demand</p>

          <p className="mt-2 font-semibold">4. Greater Faridabad</p>
          <p>New projects</p>
          <p>Modern homes</p>

          <p className="mt-2 font-semibold">5. NIT Faridabad</p>
          <p>Budget-friendly</p>
          <p>Well-developed</p>

          <p className="mt-2">
            These locations offer great options for affordable houses in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Price Trends of Houses for Rent",
      content: (
        <>
          <p>Understanding price helps you choose better.</p>

          <p className="mt-2">1 BHK: ₹6,000 – ₹12,000</p>
          <p>2 BHK: ₹10,000 – ₹20,000</p>
          <p>3 BHK: ₹18,000 – ₹35,000</p>

          <p className="mt-2">Prices depend on:</p>
          <ul className="list-disc pl-5">
            <li>Location</li>
            <li>Size</li>
            <li>Furnishing</li>
            <li>Amenities</li>
          </ul>

          <p className="mt-2">
            Checking multiple listings helps you find the best deal for a house for rent in Faridabad.
          </p>
        </>
      ),
    },
    {
      title: "How the Platform Helps Users",
      content: (
        <>
          <p>Our platform is built for ease and trust.</p>

          <p className="mt-2">Here’s how it helps:</p>
          <ul className="list-disc pl-5">
            <li>Shows all properties in one place</li>
            <li>Saves time and effort</li>
            <li>Provides real and trusted listings</li>
            <li>Removes middlemen</li>
            <li>Offers clear details and photos</li>
          </ul>

          <p className="mt-2">
            This makes finding independent house for rent in Faridabad simple and safe.
          </p>
        </>
      ),
    },

    {
      title: "Importance of Verified Listings",
      content: (
        <>
          <p>Many people face fraud in property search.</p>

          <p className="mt-2">Benefits:</p>
          <ul className="list-disc pl-5">
            <li>Real property details</li>
            <li>Correct pricing</li>
            <li>Genuine owners</li>
            <li>Safe communication</li>
          </ul>

          <p className="mt-2">
            Always choose platforms that provide trusted listings in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Direct Buyer-Seller Interaction",
      content: (
        <>
          <p>Talking directly to the owner is very helpful.</p>

          <p className="mt-2">Benefits include:</p>
          <ul className="list-disc pl-5">
            <li>No brokerage fees</li>
            <li>Clear communication</li>
            <li>Faster decision-making</li>
            <li>Better price negotiation</li>
          </ul>

          <p className="mt-2">
            Our platform focuses on direct interaction, making house rent in Faridabad easy and transparent.
          </p>
        </>
      ),
    },

    {
      title: "Free Listing + RGR Group Partnership",
      content: (
        <>
          <p>One of the biggest advantages is free property listing.</p>

          <ul className="list-disc pl-5 mt-2">
            <li>Owners can list property without any cost</li>
            <li>More listings mean more choices</li>
            <li>Better visibility through RGR Group partnership</li>
          </ul>

          <p className="mt-2">
            This partnership increases trust and ensures better reach for every house for rent in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Step-by-Step Process to Find a House",
      content: (
        <>
          <p className="font-semibold">Step 1: Search your location and budget</p>
          <p>You can filter results easily based on your needs.</p>

          <p className="mt-2 font-semibold">Step 2: Check property details</p>
          <p>Look at photos, price, and features.</p>

          <p className="mt-2 font-semibold">Step 3: Contact owner directly</p>
          <p>No agent needed, direct communication.</p>

          <p className="mt-2 font-semibold">Step 4: Visit the property</p>
          <p>Always check before finalizing.</p>

          <p className="mt-2 font-semibold">Step 5: Finalize and move in</p>
          <p>Complete agreement and shift.</p>
        </>
      ),
    },

    {
      title: "Legal Checks Before Renting",
      content: (
        <>
          <p>Before renting, always check legal details.</p>

          <p className="mt-2">Important points:</p>
          <ul className="list-disc pl-5">
            <li>Owner identity proof</li>
            <li>Property ownership proof</li>
            <li>Rent agreement</li>
            <li>Security deposit terms</li>
          </ul>

          <p className="mt-2">
            This protects you from future problems.
          </p>
        </>
      ),
    },

    {
      title: "Documents Required",
      content: (
        <>
          <p>You may need:</p>

          <ul className="list-disc pl-5 mt-2">
            <li>ID proof (Aadhar, PAN)</li>
            <li>Address proof</li>
            <li>Passport-size photos</li>
            <li>Job proof or income proof</li>
          </ul>

          <p className="mt-2">
            These documents are required for renting a house for rent in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: " Problems Buyers Face & Solutions",
      content: (
        <>
          <p>Common problems:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Fake listings</li>
            <li>High brokerage</li>
            <li>Lack of information</li>
            <li>Time waste</li>
          </ul>

          <p className="mt-3">Solutions:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Use verified platforms</li>
            <li>Choose direct owner listings</li>
            <li>Check details properly</li>
            <li>Use trusted sources</li>
          </ul>

          <p className="mt-2">
            Our platform solves these problems by offering trusted property listings in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: "Mistakes to Avoid",
      content: (
        <>
          <p>Avoid these mistakes:</p>

          <ul className="list-disc pl-5 mt-2">
            <li>Not checking property physically</li>
            <li>Ignoring legal documents</li>
            <li>Paying advance without proof</li>
            <li>Not comparing options</li>
          </ul>
        </>
      ),
    },
     {
      title: "Future Growth & Investment Value",
      content: (
        <>
          <p>Faridabad is growing fast.</p>

          <p className="mt-2">Reasons:</p>
          <ul className="list-disc pl-5">
            <li>Better infrastructure</li>
            <li>Metro expansion</li>
            <li>New housing projects</li>
          </ul>

          <p className="mt-2">
            This growth increases demand for rental homes in Faridabad.
          </p>
        </>
      ),
    },

    {
      title: " Who Should Use This Platform",
      content: (
        <>
          <p>This platform is useful for:</p>

          <ul className="list-disc pl-5 mt-2">
            <li>Tenants looking for rental homes</li>
            <li>Families searching for space</li>
            <li>Working professionals</li>
            <li>Property owners</li>
          </ul>

          <p className="mt-2">
            Anyone searching for a house for rent in Faridabad can benefit.
          </p>
        </>
      ),
    },

    {
      title: "Benefits for Sellers",
      content: (
        <>
          <p>Property owners also get many benefits.</p>

          <ul className="list-disc pl-5 mt-2">
            <li>Free property listing</li>
            <li>Direct contact with tenants</li>
            <li>No brokerage loss</li>
            <li>Faster property rental</li>
          </ul>

          <p className="mt-2">
            With RGR Group partnership, sellers get better visibility and reach.
          </p>
        </>
      ),
    },

    {
      title: " Conclusion: Complete Solution for Renting",
      content: (
        <>
          <p>Finding a house for rent in Faridabad does not have to be difficult.</p>

          <p className="mt-2">With the right platform, you can:</p>
          <ul className="list-disc pl-5">
            <li>Find all properties in one place</li>
            <li>Connect directly with owners</li>
            <li>Avoid middlemen</li>
            <li>Trust verified listings</li>
            <li>Save time and money</li>
          </ul>

          <p className="mt-2">
            This makes the whole process simple, safe, and stress-free.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#fdf2f6] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-6">

        {sections.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1
            ${
              item.isLocation
                ? "bg-gradient-to-br from-[#DE1A58] to-pink-500 text-white"
                : i % 2 === 0
                ? "bg-white border border-[#DE1A58]/10 text-gray-800"
                : "bg-[#fff1f5] border border-[#DE1A58]/10 text-gray-800"
            }`}
          >

            <h2 className={`text-lg md:text-xl font-bold mb-3 ${
              item.isLocation ? "text-white" : "text-[#DE1A58]"
            }`}>
              {item.title}
            </h2>

            <div className="space-y-1">
              {item.content}
            </div>

            {item.isLocation && (
              <Link href="/#locations">
                <button className="mt-5 bg-white text-[#DE1A58] px-5 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                  Explore More Location →
                </button>
              </Link>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}