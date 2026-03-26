"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { YOUTUBE_VIDEOS } from "@/lib/constants";

interface VideoCardProps {
  videoId: string;
  title: string;
  index: number;
}

function VideoCard({ videoId, title, index }: VideoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const isPlaceholder = videoId.startsWith("PLACEHOLDER");
  const thumbnailUrl = isPlaceholder
    ? null
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={`fade-in-section delay-${(index + 1) * 100} rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}>
      {/* Video embed */}
      <div className="relative aspect-video bg-gray-100">
        {isPlaceholder ? (
          // Placeholder state
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm text-gray-300 px-4 text-center">
              Replace YOUTUBE_VIDEOS in lib/constants.ts with your video IDs
            </p>
          </div>
        ) : !loaded ? (
          // Thumbnail with play button
          <button
            className="absolute inset-0 w-full h-full group"
            onClick={() => setLoaded(true)}
          >
            {thumbnailUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          // Actual iframe
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Title */}
      <div className="p-4 bg-white">
        <p className="text-sm font-medium text-gray-900 line-clamp-2">{title}</p>
        <p className="text-xs text-gray-400 mt-1">Free training</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <SectionWrapper id="videos" background="gray">
      <div className="text-center mb-14 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Free training
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Watch before you book
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Get a feel for my coaching style with these free training videos.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {YOUTUBE_VIDEOS.map((video, i) => (
          <VideoCard
            key={video.id}
            videoId={video.id}
            title={video.title}
            index={i}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#payment"
          className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
        >
          Ready to level up? Book a session →
        </a>
      </div>
    </SectionWrapper>
  );
}
