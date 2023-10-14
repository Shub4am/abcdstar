import { useRouter } from 'next/navigation';
import { Movie } from '@/types';

export const useRoutes = () => {
  const router = useRouter();
  const handleRouting = (movie: Movie) => {
    router.push(`/${movie.id}`);
  };
  const handleBackBtn = () => {
    router.push('/');
  };

  return { handleRouting, handleBackBtn };
};
