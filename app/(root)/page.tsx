import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import Image from "next/image";
import banner from "../../public/images/banner.png";
import BlurText from "@/components/BlurText";
import BlurTextRender from "@/components/BlurTextRender";
import ScrollVelocityRender from "@/components/ScrollVelocityRender";

export default function Home() {

  return (
    <div className="min-h-screen ">

      {/* 🔥 HERO SECTION */}
      <div className="flex flex-col-reverse  md:flex-row  items-center justify-between gap-10 py-10 bg-black">

        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <BlurTextRender />
          <p className="text-blue-500 px-4 mx-4 text-lg">
            Manage books, users, and borrowing with ease in a modern system.
          </p>


          <button className="px-4 mx-7 py-2 rounded-lg bg-blue-500 text-white font-medium
                   hover:bg-blue-600 transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-300">
            View All Books
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 mx-4 px-4 flex justify-center">
          <Image
            src={banner}
            alt="Library Banner"
            className="rounded-2xl shadow-lg object-cover h-[200px] md:h-auto w-full"
          />
        </div>
      </div>
      <div className="p-2">
         <ScrollVelocityRender />
      </div>
     

      {/* EXISTING CONTENT */}
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Recently Added"
        books={sampleBooks}
        containerClassname="mt-12"
      />

    </div>
  );
}