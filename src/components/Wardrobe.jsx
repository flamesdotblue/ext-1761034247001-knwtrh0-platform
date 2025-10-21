import { motion } from 'framer-motion'

export default function Wardrobe({ dresses, selectedId, onSelect }) {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Wardrobe</h2>
        <p className="text-sm text-gray-500">Tap a dress to wear</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {dresses.map((d) => (
          <button
            key={d.id}
            onClick={() => onSelect(d)}
            className={`group relative rounded-2xl p-3 text-left transition focus:outline-none focus:ring-2 focus:ring-pink-300 ${
              selectedId === d.id ? 'bg-white shadow-[0_10px_30px_rgba(236,72,153,0.15)] ring-1 ring-rose-200' : 'bg-white/70 hover:bg-white border border-white/70'
            }`}
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-white to-rose-50 flex items-center justify-center">
              <DressPreview color={d.color} accent={d.accent} />
            </div>
            <div className="mt-3">
              <div className="text-sm font-medium text-gray-900 truncate">{d.name}</div>
              <div className="text-xs text-gray-500">{selectedId === d.id ? 'Selected' : 'Tap to try'}</div>
            </div>
            {selectedId === d.id && (
              <motion.div layoutId="wardrobeGlow" className="absolute inset-0 rounded-2xl ring-2 ring-rose-300/60 pointer-events-none" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function DressPreview({ color, accent }) {
  return (
    <svg viewBox="0 0 120 160" className="w-20 sm:w-24">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <path d="M30 46c4 8 14 14 30 14s26-6 30-14c2-4 2-8 2-12 0-4-4-6-8-6H36c-4 0-8 2-8 6 0 4 0 8 2 12z" fill="url(#g)" />
      <path d="M14 82c14-8 30-12 46-12s32 4 46 12c4 18 2 48-46 48S10 100 14 82z" fill="url(#g)" />
    </svg>
  )
}
