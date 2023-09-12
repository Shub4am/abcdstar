import supabase from '@/config/supabaseClient';
import { Movie } from '@/types';
import { useEffect, useState } from 'react';
export const useMovieData = () => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    async function fetchBillboardMovies() {
      try {
        // Fetch movies from the database
        const { data, error } = await supabase.from('movies').select('*');

        if (error) {
          throw error;
        }

        setMovieData(data);

        if (data.length > 0) {
          // If there are movies, set the current movie index to the first movie
          setCurrentMovieIndex(0);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }
    fetchBillboardMovies();
  }, []);

  //Function to increment the current movie index
  const nextMovie = () => {
    setCurrentMovieIndex((prevIdx) => (prevIdx + 1) % movieData.length);
  };

  return { movieData, currentMovieIndex, nextMovie };
};
