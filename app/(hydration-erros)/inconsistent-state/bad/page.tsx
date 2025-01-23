// /pages/state/bad.tsx
"use client";

import { useEffect, useState } from "react";

export default function StateBadPage(){
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // After mounting on the client, data is updated
    setData("Client-side data");
  }, []);

  // Check if the data is still null (indicating SSR state mismatch)
  useEffect(() => {
    if (data === null) {
      console.error("Warning: Hydration mismatch detected!");
    }else{
      console.log("Hydration mismatch resolved!");
    }
  }, [data]);

  return (
    <div>
      <h1>Inconsistent State Hydration Error (Bad practice)</h1>
      <p>The content below will be different between SSR and client-side rendering.</p>
      <p>Data: {data}</p>
    </div>
  );
};

