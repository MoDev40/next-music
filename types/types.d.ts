declare type Album = {
  id: string;
  title: string;
  artist: string;
  releaseDate: Date | null;
  genreId: string | null;
};

declare type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  albumId: string | null;
  genreId: string | null;
  trackUrl: string;
  trackKey: string;
};
