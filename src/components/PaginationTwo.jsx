"use client";

export default function Pagination({
  page,
  totalPages,
  setPage,
}) {

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {

    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (newPage) => {

    if (newPage < 1 || newPage > totalPages) return;

    setPage(newPage);

    setTimeout(() => {

      const section =
        document.getElementById("locations") ||
        document.getElementById("property-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    }, 100);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
         className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
        border border-[#DE1A58]/40 text-[#DE1A58] disabled:opacity-40
        hover:bg-[#DE1A58]/10 transition"
      >
        Prev
      </button>

      {/* PAGES */}
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => handlePageChange(p)}
          className={`px-4 py-2 rounded-lg transition
            ${
              page === p
                ? "bg-gradient-to-r from-[#DE1A58] to-[#a10f3f] text-white shadow-md"
                : "border border-[#DE1A58]/40 text-[#DE1A58] hover:bg-[#DE1A58]/10"
            }`}
        >
          {p}
        </button>
      ))}

      {/* NEXT */}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
       className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
        border border-[#DE1A58]/40 text-[#DE1A58] disabled:opacity-40
        hover:bg-[#DE1A58]/10 transition"
      >
        Next
      </button>

    </div>
  );
}