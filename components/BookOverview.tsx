import React from "react";



const BookOverview = ({
  title,
  author,
  genre,
  rating,
  description,
  color,
  cover,
  available_copies,
  total_copies,
}: Books) => {
  const availabilityPercent =
    (available_copies / total_copies) * 100;

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-10"
      style={{
        background: `radial-gradient(circle at top left, ${color}20, #0b0f19 80%)`,
      }}
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT - STICKY COVER PANEL */}
        <div className="md:sticky md:top-10 h-fit flex justify-center">
          <div className="relative">
            
            {/* glow background */}
            <div
              className="absolute inset-0 blur-3xl opacity-30 rounded-3xl"
              style={{ backgroundColor: color }}
            />

            <img
              src={cover}
              alt={title}
              className="relative w-72 md:w-80 rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-300"
            />
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-10 text-white shadow-2xl">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h1>

          {/* META INFO */}
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
              👤 {author}
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
              📚 {genre}
            </span>

            <span
              className="px-3 py-1 rounded-full font-semibold"
              style={{ backgroundColor: `${color}40` }}
            >
              ⭐ {rating.toFixed(1)}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-white/80 leading-relaxed text-sm md:text-base">
            {description}
          </p>

          {/* AVAILABILITY */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-white/70 mb-2">
              <span>Availability</span>
              <span>
                {available_copies} / {total_copies}
              </span>
            </div>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${availabilityPercent}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              className="px-5 py-3 rounded-xl font-semibold text-black transition hover:opacity-90"
              style={{ backgroundColor: color }}
            >
              Borrow Book
            </button>

            <button className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Add to Wishlist
            </button>

            <button className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Share
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookOverview;