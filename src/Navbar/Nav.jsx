import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LOGO */}
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="text-pink-600">Wear</span>
            <span className="text-gray-900">Up</span>
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-gray-700 tracking-widest text-sm font-medium">
          <Link to="/women"><li className="hover:text-black">WOMEN</li></Link>
          <Link to="/men"><li className="hover:text-black">MEN</li></Link>
          <Link to="/trending">
            <li className="flex items-center gap-2 hover:text-black">
              TRENDING
              <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-md">
                HOT
              </span>
            </li>
          </Link>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5">

          {/* SEARCH (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-72">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search WearUp"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* HEART */}
          <svg className="w-6 h-6 cursor-pointer text-gray-800 hover:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21s-6-4.35-6-10a6 6 0 0112 0c0 5.65-6 10-6 10z"></path>
          </svg>

          {/* CART */}
          <svg className="w-6 h-6 cursor-pointer text-gray-800 hover:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 3h18v4H3z"></path>
            <path d="M3 7l2 14h14l2-14"></path>
          </svg>

          {/* HAMBURGER (MOBILE) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col gap-6 p-6 text-gray-700 tracking-widest text-sm font-medium">
            <Link to="/women" onClick={() => setOpen(false)}>WOMEN</Link>
            <Link to="/men" onClick={() => setOpen(false)}>MEN</Link>
            <Link to="/trending" onClick={() => setOpen(false)}>
              TRENDING <span className="ml-2 bg-yellow-400 px-2 py-0.5 text-[10px] rounded">HOT</span>
            </Link>

            {/* MOBILE SEARCH */}
            <input
              type="text"
              placeholder="Search WearUp"
              className="border rounded-full px-4 py-2 outline-none"
            />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
