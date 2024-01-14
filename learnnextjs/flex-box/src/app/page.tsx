// import Image from "next/image";
// import React from "react";
// import logo from "./../../public/New Project.png";
// import { IMAGES } from "@/constants/images";
// const page = () => {
//   return (
//     <main className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//       {/* parent */}
//       {IMAGES.map((image, i) => (
//         <div key={i}>
//           <Image src={image} alt="Logo" />
//         </div>
//       ))}
//     </main>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return (
    <main
      className="flex flex-wrap justify-center
     items-center tablet:bg-background"
    >
      {/* <div className="w-96 aspect-video bg-red-500 border flex justify-center items-center">
        <p>lorem</p>
      </div> */}
      <div className="container1 self-start flex-shrink-1 container2">
        <h1>lorem</h1>
      </div>
      <div className="w-96 aspect-square bg-gray-500 border flex justify-center items-center shrink-0">
        <p>lorem</p>
      </div>

      <div className="w-96 aspect-square bg-green-600 border shrink-0">
        <p>lorem</p>
      </div>
    </main>
  );
};

export default page;
