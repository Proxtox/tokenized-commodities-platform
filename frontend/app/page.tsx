"use client";

import { useState } from 'react';

export default function CommoditiesPlatform() {
  const [commodity, setCommodity] = useState('');

  const handleTokenize = () => {
    alert(`Tokenizing ${commodity} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Tokenized Commodities</h1>

      <div className="space-y-4">
        <input type="text" value={commodity} onChange={(e) => setCommodity(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Commodity (e.g. Gold, Oil)" />
        <button onClick={handleTokenize} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Tokenize Commodity
        </button>
      </div>
    </div>
  );
}