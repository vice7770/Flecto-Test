"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { usePlanetsSearchIsLoading } from "@/app/stores/planets";

function SpaceShipInput() {
  const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  const isSearchLoading = usePlanetsSearchIsLoading();

  function handleSearch(search: string) {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
      params.set("page", "1");
    } else {
      params.delete("search");
      params.delete("page", "1");
    }
    // the reason is because i want to avoid a fullpage reload, so it remains client side between search and table
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
    // replace(`${pathname}?${params.toString()}`);//this will cause a page reload
    window.history.pushState(null, '', `?${params.toString()}`);//this will not cause a page reload
  }

  const searchInputValue = searchParams.get("search")?.toString();

  return (
    <div className="flex w-full items-center justify-center bg-black p-4">
      <div className="relative max-w-md h-[250px] w-[500px]">
        <div className="absolute inset-0 bg-green-500 rounded-lg blur opacity-30 animate-pulse"></div>
        <div className="relative bg-black border-2 border-green-500 rounded-lg p-3 shadow-lg h-full">
          <div className="mb-4 text-green-400 text-xs uppercase tracking-wide">
            Spaceship Terminal
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-green-800"></div>
            <div className="w-3 h-3 rounded-full bg-green-800"></div>
          </div>
          <div>
            <div>
              <div className="relative">
                <Input
                  type="text"
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                  className="w-full bg-black text-green-400 border-2 border-green-500 rounded-none py-3 px-4 leading-tight focus:outline-none focus:border-green-300 placeholder-green-700"
                  placeholder="Enter command..."
                  defaultValue={searchInputValue}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xs">
                  {searchInputValue?.length}/50
                </div>
              </div>
              <div className="mt-4 text-green-400 text-sm font-mono">
                {">"} {isSearchLoading ? "Processing..." : "Awaiting input"}
              </div>
            </div>
            <div>
              <div className="mt-6 text-green-400 text-xs">
                <div>System Status: Online</div>
                <div>Connection: Secure</div>
                <div>Power: 98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
        body {
          font-family: "VT323", monospace;
        }
      `}</style>
    </div>
  );
}

export default SpaceShipInput;
