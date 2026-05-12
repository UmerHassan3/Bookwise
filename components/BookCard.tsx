'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";



const BookCard = ({
  id,
  title,
  author,
  cover,
  color,
  isloaned,
  timeRemaining,
}: Books) => {
  return (
    <li className="w-full xs:w-52 group">
      <Link href={`/books/${id}`}>
        
        {/* CARD */}
        <div
          className={cn(
            "relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
            isloaned && "opacity-70"
          )}
        >

          {/* COVER */}
          <div
            className="relative h-72 w-full"
            style={{
              background: `linear-gradient(135deg, ${color}40, #111827)`,
            }}
          >
            <img
              src={cover}
              alt={title}
              className="h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
          </div>

          {/* CONTENT */}
          <div className="p-3 bg-white">

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
              {title}
            </h3>

            {/* AUTHOR */}
            <p className="text-xs text-gray-500 mt-1">
              {author}
            </p>

            {/* LOANED STATE */}
            {isloaned && (
              <div className="mt-3 space-y-2">

                {/* STATUS TEXT */}
                <p className="text-xs font-medium text-red-500">
                  ⏳ {timeRemaining || "Time remaining not available"}
                </p>

                {/* RECEIPT BUTTON */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // prevent Link navigation
                    alert("Downloading receipt...");
                  }}
                  className="w-full text-xs py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  Download Receipt
                </button>
              </div>
            )}

            {/* AVAILABLE STATE BADGE */}
            {!isloaned && (
              <div className="mt-3">
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                  Available
                </span>
              </div>
            )}
          </div>
        </div>

      </Link>
    </li>
  );
};

export default BookCard;