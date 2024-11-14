import React from 'react';
import Hero from './Hero';
import SpaceShipInput from '@/components/ui/SpaceShipInput';
import Planets from './Planets';

interface PageProps {
  searchParams: {
    page?: string;
    search?: string;
  };
}

export default function Home({ searchParams }: PageProps) {
  return (
    <div className="min-h-screen grid pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full h-full gap-8 sm:items-start">
        <Hero />
        <SpaceShipInput />
        <Planets page={searchParams.page ?? "1"}/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}