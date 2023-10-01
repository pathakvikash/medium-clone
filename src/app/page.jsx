'use client';
import { useRouter, usePathname } from 'next/navigation';
import Hero from '../components/Hero';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div>
      <div className='hidden md:block'>{isHome && <Hero />}</div>
    </div>
  );
}
