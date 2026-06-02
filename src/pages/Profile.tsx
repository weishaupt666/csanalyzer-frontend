import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import { SteamCard } from '../components/SteamCard';
import { FaceitCard } from '../components/FaceitCard';
import { ArrowLeft, Loader2 } from 'lucide-react';

export const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useProfile(id);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-steam" />
        <p className="text-gray-400">Loading profile data...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-red-900/20 border border-red-500/50 rounded-lg text-center">
        <p className="text-red-400 font-bold text-lg mb-4">{error || 'Профиль не найден'}</p>
        <Link to="/" className="text-steam hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to search
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center gap-2 mb-6 transition-colors">
        <ArrowLeft size={16} /> Back
      </Link>
      
      <div className="flex flex-col gap-6">
        <SteamCard profile={data} />
        {data.faceitNickname && <FaceitCard profile={data} />}
      </div>
    </div>
  );
};