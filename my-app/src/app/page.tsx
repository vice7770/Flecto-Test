
import Planets from "./Planets";
import Hero from "./Hero";

interface PageProps {
  searchParams: {
      page: string;
  };
}

export default function Home({ searchParams } : PageProps) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full h-full gap-8 row-start-2 items-center sm:items-start">
        <Hero /> 
        <Planets page={searchParams.page ?? "1"}/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
