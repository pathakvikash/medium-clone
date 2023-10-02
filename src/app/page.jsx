'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Hero from '../components/Hero';
import { BlogSection, CategorySection } from '../components/BlogsComp/';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome && <Hero />}
      <div className='xl:px-[10rem] sm:py-[3rem]'>
        <div className='sidebar flex xl:flex-row flex-col-reverse sm:flex-col-reverse'>
          <BlogSection />

          <CategorySection />
        </div>
      </div>
    </>
  );
}
