"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import userPng from "../../assets/user.png";

const sampleCards = [
  {
    img: userPng,
    word: "선생님",
    pronunciation: "seonsaengnim",
    meaning: "teacher",
  },
  {
    img: userPng,
    word: "학생",
    pronunciation: "haksaeng",
    meaning: "student",
  },
  {
    img: userPng,
    word: "학교",
    pronunciation: "hakgyo",
    meaning: "school",
  },
];

const Flashcard = ({
  img,
  word,
  pronunciation,
  meaning,
}: {
  img: StaticImageData;
  word: string;
  pronunciation: string;
  meaning: string;
}) => (
  <div className="relative w-72 h-96 bg-white rounded-xl shadow-xl flex flex-col items-center justify-start p-6 animate-fade-in">
    <div className="w-24 h-24 mx-auto mb-4">
      <Image
        src={img}
        alt={word}
        width={96}
        height={96}
        className="object-contain"
      />
    </div>
    <div className="text-3xl font-bold text-[#f48c8c] mb-2">{word}</div>
    <div className="text-lg font-medium text-gray-700 mb-2">
      ({pronunciation})
    </div>
    <div className="text-xl text-[#f48c8c] font-semibold mt-2">{meaning}</div>
    <div className="absolute left-2 top-2 w-4 h-4 bg-gray-200 rounded-full border border-gray-400"></div>
    <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 rounded-b-xl"></div>
  </div>
);

const FlashcardsList = () => {
  const [current, setCurrent] = useState(0);
  const nextCard = () => setCurrent((c) => (c + 1) % sampleCards.length);
  const prevCard = () =>
    setCurrent((c) => (c - 1 + sampleCards.length) % sampleCards.length);
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex items-center gap-8">
        <button
          onClick={prevCard}
          className="bg-gray-200 hover:bg-gray-400 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow"
        >
          &#8592;
        </button>
        <Flashcard {...sampleCards[current]} />
        <button
          onClick={nextCard}
          className="bg-gray-200 hover:bg-gray-400 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow"
        >
          &#8594;
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        {sampleCards.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-yellow-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardsList;
