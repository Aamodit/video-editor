import React, { useState } from 'react'
import { Upload } from 'lucide-react'

interface MediaUploadProps {
  onUploadSuccess: () => void
}

export default function MediaUpload({ onUploadSuccess }: MediaUploadProps) {
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('http://localhost:5000/api/media/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      onUploadSuccess()
    } catch (error) {
      console.error('Error uploading file:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="mb-4">
      <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex items-center space-x-2">
          <Upload />
          <span className="font-medium text-gray-600">
            {isUploading ? 'Uploading...' : 'Drop files to Attach, or Browse'}
          </span>
        </span>
        <input type="file" name="file" className="hidden" onChange={handleFileUpload} disabled={isUploading} />
      </label>
    </div>
  )
}