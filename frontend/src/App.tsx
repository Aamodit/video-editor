import React, { useState, useEffect } from 'react'
import { Type, Image, Layers, Sticker, Square, MessageCircle, Cpu, FileJson, Settings } from 'lucide-react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import PreviewArea from './components/PreviewArea'
import MediaUpload from './components/MediaUpload'
import MediaLibrary from './components/MediaLibrary'

export default function App() {
  const [projectName, setProjectName] = useState('My Awesome Video')
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [mediaItems, setMediaItems] = useState([])

  const togglePlayPause = () => setIsPlaying(!isPlaying)

  const sidebarItems = [
    { icon: Type, label: 'Text' },
    { icon: Image, label: 'Media' },
    { icon: Layers, label: 'Overlay' },
    { icon: Sticker, label: 'Mask' },
    { icon: Square, label: 'Elements' },
    { icon: MessageCircle, label: 'Caption' },
    { icon: Cpu, label: 'AI' },
    { icon: FileJson, label: 'JSON' },
    { icon: Settings, label: 'Settings' },
  ]

  useEffect(() => {
    fetchMediaItems()
  }, [])

  const fetchMediaItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/media')
      if (!response.ok) {
        
        throw new Error('Failed to fetch media items')
      }
      const data = await response.json()
      setMediaItems(data)
    } catch (error) {
      console.error('Error fetching media items:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar projectName={projectName} onProjectNameChange={setProjectName} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar items={sidebarItems} />
        <main className="flex-1 overflow-hidden flex flex-col">
          <PreviewArea isPlaying={isPlaying} currentTime={currentTime} />
          <div className="flex-1 overflow-y-auto p-4">
            <MediaUpload onUploadSuccess={fetchMediaItems} />
            <MediaLibrary mediaItems={mediaItems} />
          </div>
          <Timeline
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            zoom={zoom}
            setZoom={setZoom}
          />
        </main>
      </div>
    </div>
  )
}