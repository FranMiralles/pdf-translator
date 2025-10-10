"use client";
import { useState } from "react";

export default function Home() {
  const [counts, setCounts] = useState({
    nigiri: 0,
    uramaki: 0,
    maki: 0,
    otros: 0,
  });

  const handleIncrement = (type: keyof typeof counts) => {
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type: keyof typeof counts) => {
    setCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] - 1),
    }));
  };

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const sushis = [
    { name: "Nigiri", key: "nigiri", emoji: "🍣" },
    { name: "Uramaki", key: "uramaki", emoji: "🍥" },
    { name: "Maki", key: "maki", emoji: "🍙" },
    { name: "Otros", key: "otros", emoji: "🍘" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-red-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-6 text-red-700 tracking-wide drop-shadow-sm">
        🍣 Contador de Sushi
      </h1>
      <p className="text-gray-700 mb-10 text-lg text-center">
        ¡Cuántas piezas de sushi has disfrutado hoy? 🇯🇵✨
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {sushis.map((item) => (
          <div
            key={item.key}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-pink-200"
          >
            <div className="text-6xl mb-4">{item.emoji}</div>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              {item.name}
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {counts[item.key as keyof typeof counts]}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleDecrement(item.key as keyof typeof counts)}
                className="bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-full text-lg font-bold shadow-md"
              >
                −
              </button>
              <button
                onClick={() => handleIncrement(item.key as keyof typeof counts)}
                className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-md"
              >
                ＋
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl text-red-700 font-semibold">
          Total: {total} piezas 🍱
        </h3>
        {total > 0 && (
          <p className="text-gray-600 mt-2 italic">
            {total < 10
              ? "Aún tienes espacio para más sushi 😋"
              : "¡Increíble! Has comido un festín digno de un maestro japonés 🎌"}
          </p>
        )}
      </div>
    </div>
  );
}
