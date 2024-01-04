import { Montserrat } from "next/font/google";
const mons = Montserrat({ weight: "500", subsets: ["latin"] });
export default function Home() {
  return (
    <div className="grid lg:grid-cols-3 gap-x-12 gap-y-4 m-8 md:grid-cols-2">
      <div className="bg-gray-400 col-span-1 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px] grid grid-cols-4 hover:bg-red-600 hover:scale-105">
        2
      </div>
      <div className="bg-gray-400 col-span-1 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px]">
        3
      </div>
      <div className="bg-gray-400 col-span-1 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px]">
        4
      </div>
      <div className="bg-gray-400 rounded-lg col-span-1 border-2 border-black text-3xl font-sans text-center h-[350px]">
        5
      </div>
      <div className="bg-gray-400 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px]">
        6
      </div>
      <div className="bg-gray-400 rounded-lg border-2 border-black text-3xl font-sans text-center h-[350px]">
        7
      </div>
    </div>
  );
}
