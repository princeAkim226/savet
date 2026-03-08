"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

interface VideoHeroProps {
  videoSrc?: string
  posterSrc?: string
  title?: string
  subtitle?: string
  height?: string
  showControls?: boolean
  children?: React.ReactNode
}

export function VideoHero({
  videoSrc = "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",
  posterSrc = "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3",
  title,
  subtitle,
  height = "h-[600px] md:h-[700px]",
  showControls = true,
  children
}: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleLoadedData = () => setIsLoaded(true)
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)

      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("play", handlePlay)
      video.addEventListener("pause", handlePause)

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("play", handlePlay)
        video.removeEventListener("pause", handlePause)
      }
    }
  }, [])

  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterSrc}
        onError={(e) => {
          console.error("Erreur de chargement de la vidéo:", e)
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback image si la vidéo ne charge pas */}
        <Image
          src={posterSrc}
          alt={title || "Hero background"}
          fill
          className="object-cover"
          priority
        />
      </video>

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Video Controls */}
      {showControls && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-200"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {children || (
          <>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                {subtitle}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

