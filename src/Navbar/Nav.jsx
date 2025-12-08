import React from 'react'

function Nav() {
  return (
   
    <div class="max-w-8xl mx-auto flex items-center justify-between py-4 px-6 shadow-md">
      <h1 class="text-2xl font-bold">
        <span class="text-pink-600">Wear</span><span class="text-gray-900">Up</span>
      </h1>
  
      <ul class="hidden md:flex items-center gap-12 text-gray-700 tracking-widest text-sm font-medium">
        <li class="hover:text-black cursor-pointer">WOMEN</li>
        <li class="hover:text-black cursor-pointer">MEN</li>
  
        <li class="flex items-center gap-2 hover:text-black cursor-pointer">
          TRENDING
          <span class="bg-yellow-400 text-black text-[10px] font-bold px-2 py-[2px] rounded-md -mt-1">
            HOT
          </span>
        </li>
      </ul>
  
      <div class="flex items-center gap-6">
  
        <div class="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-72">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search TrendBay"
            class="w-full outline-none text-gray-700"
          />
        </div>
  
        <svg class="w-6 h-6 cursor-pointer text-gray-800 hover:text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 21s-6-4.35-6-10a6 6 0 0112 0c0 5.65-6 10-6 10z"></path>
        </svg>
  
        <svg class="w-6 h-6 cursor-pointer text-gray-800 hover:text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 3h18v4H3z"></path>
          <path d="M3 7l2 14h14l2-14"></path>
        </svg>
  
      </div>
  
    </div>
 
  
  )
}

export default Nav