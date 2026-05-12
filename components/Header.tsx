import React from "react";
import Link from "next/link";
import  { handleSignOut } from "./SignOut";

const Header = () => {

    return (
        <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">

                    <span className="text-lg font-semibold text-gray-800">
                        Bookwise
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-indigo-600 transition">
                        Home
                    </Link>
                    <Link href="/books" className="hover:text-indigo-600 transition">
                        Books
                    </Link>

                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    <form action={handleSignOut}>
                        <button
                            className="px-4 py-2 rounded-xl text-sm font-medium
                         bg-gradient-to-r from-blue-500 to-blue-700 text-white
                         shadow-md hover:shadow-lg hover:scale-105
                         transition-all duration-200 active:scale-95"
                        >
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;