"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("Session status:", status);
  console.log("Session data:", session);

  return <div>hello</div>;
}
