"use client";

import { Play, Video } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function HeroVideo({ src, poster }: { src?: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function handlePlay() {
    if (!src) {
      setMessage("Personal video coming soon.");
      return;
    }

    try {
      await videoRef.current?.play();
      setMessage(null);
    } catch {
      setMessage("Use the video controls to start playback.");
    }
  }

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-portfolio bg-portfolio-charcoal shadow-portfolio-card ring-1 ring-portfolio-grey">
      <div className="aspect-video w-full min-w-0">
        {src ? (
          <video ref={videoRef} className="size-full object-cover" src={src} poster={poster} controls preload="metadata" aria-label="Introductory portfolio video" />
        ) : (
          <div className="relative flex size-full min-h-[190px] items-center justify-center overflow-hidden bg-portfolio-charcoal text-white sm:min-h-[260px] lg:min-h-[430px]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,43,54,0.98),rgba(37,99,235,0.74))]" />
            <div className="absolute inset-4 rounded-portfolio border border-white/15 sm:inset-6" />
            <div className="absolute left-4 top-4 flex max-w-[calc(100%-32px)] items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur sm:left-6 sm:top-6 sm:text-xs">
              <Video size={14} /> Video introduction
            </div>
            <div className="relative w-full max-w-[26rem] px-6 text-center sm:px-8">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 sm:size-20">
                <Video size={28} />
              </div>
              <p className="mt-4 text-lg font-semibold sm:mt-6 sm:text-2xl">Personal video</p>
              <p className="mt-2 text-xs leading-5 text-white/70 sm:mt-3 sm:text-sm sm:leading-6">Your introduction will play here.</p>
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={handlePlay}
        className={cn("focus-ring absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-portfolio-orange text-white shadow-portfolio-soft transition hover:bg-orange-600 sm:bottom-6 sm:right-6 sm:size-14 lg:size-16", src && "lg:size-16")}
        aria-label={src ? "Play Personal video" : "Personal video coming soon"}
      >
        <Play size={24} fill="currentColor" />
      </button>
      {message ? (
        <p className="absolute inset-x-4 bottom-4 rounded-portfolio bg-white px-4 py-3 text-xs font-medium leading-5 text-portfolio-charcoal shadow-portfolio-card sm:inset-x-6 sm:bottom-6 sm:text-sm" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}


