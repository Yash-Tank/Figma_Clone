"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically import the App component with ssr disabled.
 * This ensures it only renders on the client.
 */
const App = dynamic(() => import("./App"), { ssr: false });

export default function ClientApp() {
  return <App />;
}
