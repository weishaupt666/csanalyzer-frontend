import { useState, useEffect } from 'react';
import type { ProfileData } from '../types';

export const useProfile = (steamId: string | undefined) => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!steamId) return;

    const fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:59050/CSService.svc/profile/${steamId}`);
        if (!response.ok) throw new Error('Network error or profile not found');
        
        const result: ProfileData = await response.json();
        
        if (result.error) {
          setError(result.error);
        } else {
          setData(result);
        }
      } catch (err: any) {
        setError(err.message || 'An unknown error has occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [steamId]);

  return { data, isLoading, error };
};