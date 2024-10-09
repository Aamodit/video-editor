import React, { useState } from 'react'
import { HelpCircle, FileInput, Save } from 'lucide-react'

interface NavbarProps {
  projectName: string
  onProjectNameChange: (name: string) => void
}

export default function Navbar({ projectName, onProjectNameChange }: NavbarProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onProjectNameChange(e.target.value)
  }

  return (
    <nav className="bg-purple-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">VideoEditor</span>
          {isEditing ? (
            <input
              type="text"
              value={projectName}
              onChange={handleProjectNameChange}
              onBlur={() => setIsEditing(false)}
              className="bg-purple-800 px-2 py-1 rounded text-sm"
              autoFocus
            />
          ) : (
            <span
              className="text-sm bg-purple-800 px-2 py-1 rounded cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              {projectName}
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          <button className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">Design</button>
          <button className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">Connect</button>
          <button className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">Automate</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-purple-700 rounded transition-colors">
            <HelpCircle size={20} />
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-purple-700 rounded hover:bg-purple-600 transition-colors">
            <FileInput size={20} />
            <span>Merge Fields</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-green-600 rounded hover:bg-green-500 transition-colors">
            <Save size={20} />
            <span>Save</span>
          </button>
        </div>
      </div>
    </nav>
  )
}