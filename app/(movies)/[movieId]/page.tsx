interface MovieIdPageProps {
  params: {
    movieId: string;
  };
}

const WatchMovie = ({ params }: MovieIdPageProps) => {
  return (
    <div className="text-white bg-midnight h-screen w-screen flex flex-col items-center justify-center">
      <p>Watching...</p>
      <p>movie Id: {params.movieId}</p>
    </div>
  );
};

export default WatchMovie;
