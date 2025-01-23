// /pages/random/good.tsx
"use client";

import { useEffect, useState } from "react";

export default function RandomPage(){
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    // Only set the random number after the component has mounted on the client
    setRandomNumber(Math.random());
  }, []);

  // Render a loading state or a default number on the first render
  if (randomNumber === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
    </div>
  );
};


/*
Why is this Good?
	1.	Consistent Initial Render: Initially, the random number is null, which means it won’t render any number during SSR. This ensures that the initial render is consistent on both the server and the client.

	2.	Loading State: It shows a loading state ("Loading...") on the first render until the client-side effect (useEffect) sets the random number.

	3.	Hydration Safe: When the component mounts on the client side, React updates the state, but the HTML generated on the client matches the server-rendered HTML, preventing hydration errors.
 */

    