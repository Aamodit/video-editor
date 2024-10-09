import React from 'react'

interface PreviewAreaProps {
  isPlaying: boolean
  currentTime: number
}

export default function PreviewArea({ isPlaying, currentTime }: PreviewAreaProps) {
  return (
    <div className="bg-black aspect-video flex items-center justify-center text-white">
      <div className="text-center">
        <div className="text-2xl mb-2">Preview Area</div>
        <div>
          Status: {isPlaying ? 'Playing' : 'Paused'} | Time: {currentTime.toFixed(2)}s
        </div>
      </div>
    </div>
  )
}