"use client";
import { ConvexProvider } from "convex/react";
import { React } from "react";
import { ConvexReactClient } from "convex/react";

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      {" "}
      <ConvexProvider client={convex}>
        {" "}
        <div>{children}</div>
      </ConvexProvider>
    </GoogleOAuthProvider>
  );
}

export default Provider;
