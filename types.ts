export interface Movie {
  id: number;
  created_at: string;
  description: string | null;
  duration: string | null;
  genre: string | null;
  thumbnail_url: string | null;
  title: string | null;
  video_url: string | null;
  year: string | null;
}
