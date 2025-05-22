"use client";
import Image from "next/image";
// import { useEffect, useState } from "react";

type Imagedata = {
  imageUrl: string;
  name: string;
};

// type Size = {
//   height: number;
//   width: number;
// };
export const ImageLoader = ({ imageUrl, name }: Imagedata) => {
  //   const [size, setsize] = useState<Size>({ height: 200, width: 200 });
  //   useEffect(() => {
  //     setsize({ height: 1000, width: 1000 });
  //   }, []);
  return <Image src={imageUrl} alt={name} height={1000} width={1000} className="img-fluid w-100" />;
};
