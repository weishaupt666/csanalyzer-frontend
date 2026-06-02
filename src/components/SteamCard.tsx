import React from 'react';
import type { ProfileData } from '../types';
import { MonitorPlay, Users, Award, Calendar } from 'lucide-react';

export const SteamCard: React.FC<{ profile: ProfileData }> = ({ profile }) => {
  return (
    <div className="bg-card rounded-lg p-6 flex flex-col md:flex-row gap-6 border border-gray-800 shadow-xl">
      <div className="flex flex-col items-center gap-4">
        <img 
          src={profile.avatarUrl} 
          alt={profile.nickname} 
          className="w-40 h-40 rounded border border-gray-700 object-cover"
        />
        {(profile.isVacBanned || profile.isTradeBanned) && (
          <div className="flex gap-2">
            {profile.isVacBanned && <span className="bg-red-500/20 text-red-500 px-2 py-1 rounded text-xs font-bold">VAC BANNED</span>}
            {profile.isTradeBanned && <span className="bg-red-500/20 text-red-500 px-2 py-1 rounded text-xs font-bold">TRADE BANNED</span>}
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          {profile.nickname}
        </h1>

        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase mb-1">SteamID64</p>
            <p className="text-gray-300 font-mono">{profile.steamId}</p>
          </div>
          
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase mb-1">CS2 Playtime</p>
            <p className="text-gray-300 flex items-center gap-2">
              <MonitorPlay size={16} className="text-steam" />
              {profile.cs2PlaytimeHours}h <span className="text-gray-500">/ {profile.cs2RecentPlaytimeHours}h</span>
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Friends</p>
            <p className="text-gray-300 flex items-center gap-2">
              <Users size={16} /> {profile.friendsCount}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase mb-1">XP Level</p>
            <p className="text-gray-300 flex items-center gap-2">
              <Award size={16} className="text-yellow-500" /> {profile.steamLevel}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Registered</p>
            <p className="text-gray-300 flex items-center gap-2">
              <Calendar size={16} /> {profile.accountCreatedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};