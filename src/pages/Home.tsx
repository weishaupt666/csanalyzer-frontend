import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export const Home: React.FC = () => {
  const [steamId, setSteamId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (steamId.trim()) {
      navigate(`/profile/${steamId.trim()}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-card p-8 rounded-xl shadow-2xl border border-gray-800 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">CSAnalyzer</h1>
        <form onSubmit={handleSearch} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter SteamID..."
            className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-steam transition-colors"
            value={steamId}
            onChange={(e) => setSteamId(e.target.value)}
          />
          <button 
            type="submit"
            className="w-full bg-steam hover:bg-blue-500 text-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Search size={20} /> Analyze
          </button>
        </form>
      </div>
    </div>
  );
};