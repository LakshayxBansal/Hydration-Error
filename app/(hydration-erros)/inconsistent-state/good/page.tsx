// /pages/state/good.tsx
"use client";

import { useEffect, useState } from "react";

export default function StateGoodPage(){
  const [data, setData] = useState<string>("Server-side data ...");

  useEffect(() => {
    // After mounting on the client, data is updated
    setData("Client-side data");
  }, []);

  useEffect(() => {
    if (data === null) {
      console.error("Warning: Hydration mismatch detected!");
    }else{
      console.log("Hydration mismatch resolved!");
    }
  }, [data]);

  return (
    <div>
      <h1>Inconsistent State Hydration Error (Good practice)</h1>
      <p>The content below is consistent between SSR and client-side rendering.</p>
      <p>Data: {data}</p>
    </div>
  );
};

