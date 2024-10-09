import React from 'react'
import { Play, Pause, SkipBack, SkipForward, Plus } from 'lucide-react'

interface TimelineProps {
  currentTime: number
  setCurrentTime: (time: number) => void
  isPlaying: boolean
  togglePlayPause: () => void
  zoom: number
  setZoom: (zoom: number) => void
}

export default function Timeline({
  currentTime,
  setCurrentTime,
  isPlaying,
  togglePlayPause,
  zoom,
  setZoom,
}: TimelineProps) {
  const tracks = [
    { id: '1', name: 'Video 1', items: [] },
    { id: '2', name: 'Audio 1', items: [] },
    { id: '3', name: 'Text', items: [] },
  ]

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded">
            <SkipBack size={20} />
          </button>
          <button onClick={togglePlayPause} className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span>Zoom:</span>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <div style={{ width: `${100 * zoom}%` }}>
          {tracks.map((track) => (
            <div key={track.id} className="flex items-center mb-2">
              <div className="w-24 flex-shrink-0 mr-2">{track.name}</div>
              <div className="flex-grow h-12 bg-purple-200 rounded relative">
                {track.items.map((item: any) => (
                  <div
                    key={item.id}
                    className="absolute h-full rounded bg-purple-500"
                    style={{
                      left: `${item.start * 10 * zoom}%`,
                      width: `${item.duration * 10 * zoom}%`,
                    }}
                  >
                    <span className="text-xs p-1 truncate block text-white">{item.content}</span>
                  </div>
                ))}
              </div>
              <div className="ml-2">
                <button className="bg-purple-500 hover:bg-purple-600 text-white p-1 rounded">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={currentTime}
          onChange={(e) => setCurrentTime(parseInt(e.target.value))}
          className="w-full mt-2"
        />
      </div>
    </div>
  )
}