export interface Anime {
  id: number;
  title: string;
  description: string;
  genres: string[];
  coverImage: string;
}

export interface MoodCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  animeList: Anime[];
}