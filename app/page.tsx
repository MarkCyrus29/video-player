"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      alert("Please upload a valid video file.");
      e.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    router.push(`/player?file=${encodeURIComponent(url)}`);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-24 space-y-6">
      <h1 className="text-2xl font-bold">Video Player for Nicole Francisco</h1>

      <label
        htmlFor="video-input"
        className="p-4 border rounded-lg hover:text-background hover:bg-foreground transition-colors cursor-pointer active:opacity-80"
      >
        Input Video
      </label>
      <input
        type="file"
        id="video-input"
        className="hidden"
        accept="video/*"
        onChange={handleUpload}
      />
    </main>
  );
}
