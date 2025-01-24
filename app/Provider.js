"use client"
import { ConvexProvider } from "convex/react";
import { React } from "react";
import { ConvexReactClient } from "convex/react";


function Provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <ConvexProvider client={convex}>
      {" "}
      <div>{children}</div>
    </ConvexProvider>
  );
}

export default Provider;
