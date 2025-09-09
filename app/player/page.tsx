"use client";
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Page() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [time, setTime] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setTime(videoRef.current.currentTime);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-24 space-y-6">
      <span>
        <Link href={"/"}>{`< Back`}</Link>
        <h1 className="text-2xl font-bold">
          Video Player for Nicole Francisco
        </h1>
      </span>
      {file ? (
        <>
          <video
            ref={videoRef}
            src={file}
            controls
            className="max-w-lg rounded-md shadow"
            onTimeUpdate={handleTimeUpdate}
          />
          <p className="text-lg font-semibold !mb-0">
            Current Time (milliseconds): {(time * 1000).toFixed(5)} ms
          </p>
          <p className="text-lg font-semibold">
            Current Time (seconds): {time.toFixed(5)} s
          </p>
        </>
      ) : (
        <p>No video file provided.</p>
      )}
    </main>
  );
}

export default Page;
