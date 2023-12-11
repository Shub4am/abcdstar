import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-screen text-white flex justify-center items-center py-4 px-32">
      <div className="flex flex-col gap-y-2">
        <Image
          unoptimized
          loading="eager"
          src={'https://images.unsplash.com/photo-1556761175-b413da4baf72'}
          alt="work"
          width="0"
          height="0"
          className="rounded-2xl w-[640px] h-[480px]"
        />
        <p className="text-neutral-300">
          Photo by{' '}
          <Link
            target="_blank"
            href="https://unsplash.com/@austindistel"
            className="underline"
          >
            Austin Distel
          </Link>{' '}
          on{' '}
          <Link
            target="_blank"
            href="https://unsplash.com/photos/three-men-sitting-on-chair-beside-tables-mpN7xjKQ_Ns"
            className="underline"
          >
            Unsplash
          </Link>
        </p>
      </div>

      <div className="flex flex-col px-4 text-center">
        <h1 className="font-bold text-6xl">Join us.</h1>
        <p className="text-2xl"> Make a Difference</p>
        <p className="pt-6 text-2xl">We are currently not hiring!</p>
        <p className="text-lg">Stay tuned for more updates</p>
      </div>
    </div>
  );
}
