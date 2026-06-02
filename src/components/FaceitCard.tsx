import React from 'react';
import type { ProfileData } from '../types';

export const FaceitCard: React.FC<{ profile: ProfileData }> = ({ profile }) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-gray-800 shadow-xl mt-6">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-faceit font-black text-2xl tracking-tighter">FACEIT</span>
        <h2 className="text-xl font-bold">{profile.faceitNickname}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Country</p>
          <img 
            src={`https://flagcdn.com/w20/${profile.faceitCountry.toLowerCase()}.png`} 
            alt={profile.faceitCountry} 
            className="h-4 rounded-sm mt-1" 
          />
        </div>

        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Elo</p>
          <p className="text-faceit font-bold text-lg">{profile.faceitElo}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Winrate</p>
          <p className="text-gray-300 font-semibold">{profile.faceitWinrate}%</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">HS%</p>
          <p className="text-gray-300 font-semibold">{profile.faceitHsPercentage}%</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Matches</p>
          <p className="text-gray-300 font-semibold">{profile.faceitMatches}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">K/D</p>
          <p className="text-gray-300 font-semibold">{profile.faceitKd}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-800 pt-4">
        <p className="text-gray-500 text-xs font-semibold uppercase mb-2">Recent Results</p>
        <div className="flex gap-2 font-bold font-mono">
          {profile.faceitRecentResults.map((res, idx) => (
            <span key={idx} className={res === "1" ? "text-green-500" : "text-red-500"}>
              {res === "1" ? "W" : "L"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};