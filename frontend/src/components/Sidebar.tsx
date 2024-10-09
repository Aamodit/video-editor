import React from 'react'
import { LucideIcon } from 'lucide-react'

interface SidebarItem {
  icon: LucideIcon
  label: string
}

interface SidebarProps {
  items: SidebarItem[]
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <div className="w-20 bg-purple-900 text-white flex flex-col items-center py-4 space-y-6">
      {items.map((item, index) => (
        <button key={index} className="flex flex-col items-center space-y-1 hover:bg-purple-700 p-2 rounded transition-colors">
          <item.icon size={24} />
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  )
}