"use client";
import { Suspense } from "react";
import PlayerContent from "./PlayerContent";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading player...</p>}>
      <PlayerContent />
    </Suspense>
  );
}
