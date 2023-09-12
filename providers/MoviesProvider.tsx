'use client';
import React, { createContext, useContext } from 'react';
import { Movie } from '@/types';
import { useMovieData } from '@/hooks/useMovieData';

interface MoviesProviderProps {
  children: React.ReactNode;
}

const MoviesContext = createContext<{ movieData: Movie[] | null } | undefined>(
  undefined
);

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const { movieData } = useMovieData();

  return (
    <MoviesContext.Provider value={{ movieData }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error(
      'useMoviesContext must be used within a MovieContextProvider'
    );
  }
  return context;
};
