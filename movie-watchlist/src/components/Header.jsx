import React, { useState } from "react";

export default function Header({ isHome, pageSwitch }) {
  return (
    <header className="flex h-full items-center bg-black text-white justify-between px-5 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <h1 className="text-6xl font-bold">
        {isHome ? "Find your film" : "My Watchlist"}
      </h1>

      <button className="font-bold text-xl cursor-pointer" onClick={pageSwitch}>
        {isHome ? "My watchlist" : "Search for movies"}
      </button>
    </header>
  );
}
