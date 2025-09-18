"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md  px-6 z-30">
      <div className="max-w-[1200px] flex items-center justify-between  mx-auto my-auto py-2" >
      {/* Левый блок — можно добавить лого */}
      <div className="flex items-center gap-4">
        <h2 className="text-gray-700  font-bold text-3xl">
          LinguaAI
        </h2>
      </div>

      {/* Правый блок — кнопка */}
      <div>
        <button className="bg-green-800 text-white px-4 py-2 rounded-md shadow hover:bg-cyan-600 transition">
          Sigh in
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
