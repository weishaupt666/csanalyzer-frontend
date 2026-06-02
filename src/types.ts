export interface ProfileData {
  accountCreatedDate: string;
  avatarUrl: string;
  cs2PlaytimeHours: number;
  cs2RecentPlaytimeHours: number;
  error: string | null;
  faceitCountry: string;
  faceitElo: number;
  faceitHsPercentage: string;
  faceitKd: string;
  faceitMatches: number;
  faceitNickname: string;
  faceitRecentResults: string[]; // ["1", "1", "0", "1", "1"] (1 - Win, 0 - Loss)
  faceitWinrate: string;
  friendsCount: number;
  isTradeBanned: boolean;
  isVacBanned: boolean;
  nickname: string;
  steamId: string;
  steamLevel: number;
}