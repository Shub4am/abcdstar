import { useMoviesContext } from '@/providers/MoviesProvider';
import Image from 'next/image';

const MovieListCard = () => {
  const { movieData } = useMoviesContext();

  return movieData?.map((movie) => (
    <div key={movie.id}>
      <div className=" group bg-transparent flex items-center justify-center text-center w-[90px] md:w-[150px]  h-[120px] md:h-[200px]  rounded-lg ">
        <Image
          loading="lazy"
          unoptimized
          src={movie.thumbnail_url || ''}
          alt={movie.title || 'Movie Title'}
          width={90}
          height={120}
          className="rounded-lg object-cover w-[90px] h-[120px] md:w-[150px] md:h-[200px] brightness-[.8]"
        />
      </div>
    </div>
  ));
};

export default MovieListCard;
