import React from 'react'

interface MediaItem {
  _id: string
  filename: string
  originalName: string
  mimeType: string
}

interface MediaLibraryProps {
  mediaItems: MediaItem[]
}

export default function MediaLibrary({ mediaItems }: MediaLibraryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mediaItems.map((item) => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {item.mimeType.startsWith('image/') ? (
            <img
              src={`http://localhost:5000/api/media/file/${item.filename}`}
              alt={item.originalName}
              className="w-full h-32 object-cover"
            />
          ) : (
            <video
              src={`http://localhost:5000/api/media/file/${item.filename}`}
              className="w-full h-32 object-cover"
            />
          )}
          <div className="p-2">
            <p className="text-sm font-medium truncate">{item.originalName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}