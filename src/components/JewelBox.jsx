import { motion } from 'framer-motion'

export default function JewelBox({ necklaces, earrings, selected, onSelectNecklace, onSelectEarrings }) {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Jewel Box</h2>
        <p className="text-sm text-gray-500">Necklaces and earrings</p>
      </div>

      <section className="mb-5">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Necklaces</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {necklaces.map((n) => (
            <motion.button
              key={n.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectNecklace(n)}
              className={`group rounded-2xl p-3 bg-white/70 hover:bg-white border border-white/70 transition ${
                selected.necklace === n.id ? 'ring-2 ring-rose-300' : ''
              }`}
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-white to-rose-50 flex items-center justify-center">
                <NecklacePreview necklace={n} />
              </div>
              <div className="mt-2 text-xs font-medium text-gray-700 text-center">{n.name}</div>
            </motion.button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Earrings</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {earrings.map((e) => (
            <motion.button
              key={e.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectEarrings(e)}
              className={`group rounded-2xl p-3 bg-white/70 hover:bg-white border border-white/70 transition ${
                selected.earrings === e.id ? 'ring-2 ring-rose-300' : ''
              }`}
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-white to-rose-50 flex items-center justify-center">
                <EarringPreview earring={e} />
              </div>
              <div className="mt-2 text-xs font-medium text-gray-700 text-center">{e.name}</div>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  )
}

function NecklacePreview({ necklace }) {
  return (
    <svg viewBox="0 0 100 100" className="h-14 w-14">
      <path d="M28 40c12 8 32 8 44 0" stroke={necklace.color} strokeWidth="6" strokeLinecap="round" fill="none" />
      {necklace.id === 'ruby' && <circle cx="50" cy="44" r="6" fill={necklace.color} />}
      {necklace.id === 'sapphire' && <path d="M50 46l6 8-6 8-6-8z" fill={necklace.color} />}
      {necklace.id === 'emerald' && <path d="M50 44l8 8-8 8-8-8z" fill={necklace.color} />}
      {necklace.id === 'pearl' && (
        <g>
          {[...Array(6)].map((_, i) => (
            <circle key={i} cx={32 + i * 8} cy={40} r="3" fill={necklace.color} />
          ))}
        </g>
      )}
    </svg>
  )
}

function EarringPreview({ earring }) {
  return (
    <svg viewBox="0 0 100 100" className="h-14 w-14">
      {earring.id === 'stud' && <circle cx="50" cy="50" r="5" fill={earring.color} />}
      {earring.id === 'hoop' && <circle cx="50" cy="50" r="12" stroke={earring.color} strokeWidth="4" fill="none" />}
      {earring.id === 'tear' && <path d="M50 40c6 8 6 16 0 20" stroke={earring.color} strokeWidth="4" strokeLinecap="round" />}
      {earring.id === 'floral' && (
        <g fill={earring.color}>
          <circle cx="50" cy="50" r="4" />
          <circle cx="44" cy="50" r="3" />
          <circle cx="56" cy="50" r="3" />
          <circle cx="50" cy="44" r="3" />
          <circle cx="50" cy="56" r="3" />
        </g>
      )}
    </svg>
  )
}
