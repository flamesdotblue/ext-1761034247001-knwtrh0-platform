import { motion } from 'framer-motion'

export default function DollCanvas({ dress, necklace, earrings, makeup, hairColor }) {
  return (
    <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 p-4 sm:p-8">
        <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.9),_rgba(255,255,255,0.6))] border border-white/70 shadow-inner flex items-center justify-center">
          <div className="w-full max-w-md">
            <svg viewBox="0 0 320 480" className="w-full drop-shadow-sm">
              <defs>
                <linearGradient id="dressGrad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor={dress.accent} />
                  <stop offset="100%" stopColor={dress.color} />
                </linearGradient>
                <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
                </filter>
              </defs>

              {/* Hair */}
              <motion.path
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                d="M160 60c36 0 66 26 66 64 0 36-6 58-18 66-10 8-20 10-30 10-8 0-14-2-18-6-4 4-10 6-18 6-10 0-20-2-30-10-12-8-18-30-18-66 0-38 30-64 66-64z"
                fill={hairColor}
                filter="url(#soft)"
              />

              {/* Neck */}
              <path d="M148 150h24v22c0 8-6 14-12 14s-12-6-12-14v-22z" fill="#f6d6c8" />

              {/* Face */}
              <circle cx="160" cy="120" r="38" fill="#f8dfd2" />

              {/* Eyes */}
              <g>
                <ellipse cx="146" cy="118" rx="8" ry="6" fill="#ffffff" />
                <ellipse cx="174" cy="118" rx="8" ry="6" fill="#ffffff" />
                <circle cx="146" cy="118" r="3" fill="#2b2d42" />
                <circle cx="174" cy="118" r="3" fill="#2b2d42" />
                <ellipse cx="146" cy="118" rx="8" ry="6" fill={makeup.eyeshadow} opacity="0.18" />
                <ellipse cx="174" cy="118" rx="8" ry="6" fill={makeup.eyeshadow} opacity="0.18" />
              </g>

              {/* Nose */}
              <path d="M160 126c0 6-6 8-6 8" stroke="#e6b8a2" strokeWidth="1.2" fill="none" />

              {/* Mouth */}
              <path d="M146 138c6 6 22 6 28 0" stroke={makeup.lips} strokeWidth="3" strokeLinecap="round" />

              {/* Blush */}
              <circle cx="132" cy="130" r="8" fill={makeup.blush} opacity="0.25" />
              <circle cx="188" cy="130" r="8" fill={makeup.blush} opacity="0.25" />

              {/* Torso */}
              <path d="M120 172c-10 20-18 44-18 74 0 42 26 78 58 78s58-36 58-78c0-30-8-54-18-74-6 8-20 14-40 14s-34-6-40-14z" fill="#f3e6df" />

              {/* Dress bodice */}
              <motion.path
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 14 }}
                d="M120 172c6 10 24 18 40 18s34-8 40-18c4-6 6-12 6-18 0-6-4-10-10-10h-72c-6 0-10 4-10 10 0 6 2 12 6 18z"
                fill="url(#dressGrad)"
              />

              {/* Dress skirt */}
              <motion.path
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.05 }}
                d="M92 246c20-12 44-20 68-20s48 8 68 20c8 28 2 78-68 78s-76-50-68-78z"
                fill="url(#dressGrad)"
              />

              {/* Necklace */}
              <g>
                <path d="M132 164c14 10 42 10 56 0" stroke={necklace.color} strokeWidth="6" strokeLinecap="round" fill="none" />
                {necklace.id === 'ruby' && (
                  <circle cx="160" cy="168" r="6" fill={necklace.color} />
                )}
                {necklace.id === 'sapphire' && (
                  <path d="M160 170l6 8-6 8-6-8z" fill={necklace.color} />
                )}
                {necklace.id === 'emerald' && (
                  <path d="M160 168l8 8-8 8-8-8z" fill={necklace.color} />
                )}
                {necklace.id === 'pearl' && (
                  <g>
                    {[...Array(8)].map((_, i) => (
                      <circle key={i} cx={132 + i * 8} cy={164 + (i>3?1:0)} r="3.2" fill={necklace.color} />
                    ))}
                  </g>
                )}
              </g>

              {/* Earrings */}
              <g>
                {earrings.id === 'stud' && (
                  <>
                    <circle cx="124" cy="118" r="3" fill={earrings.color} />
                    <circle cx="196" cy="118" r="3" fill={earrings.color} />
                  </>
                )}
                {earrings.id === 'hoop' && (
                  <>
                    <circle cx="120" cy="126" r="8" stroke={earrings.color} strokeWidth="3" fill="none" />
                    <circle cx="200" cy="126" r="8" stroke={earrings.color} strokeWidth="3" fill="none" />
                  </>
                )}
                {earrings.id === 'tear' && (
                  <>
                    <path d="M120 124c4 6 4 12 0 16" stroke={earrings.color} strokeWidth="4" strokeLinecap="round" />
                    <path d="M200 124c-4 6-4 12 0 16" stroke={earrings.color} strokeWidth="4" strokeLinecap="round" />
                  </>
                )}
                {earrings.id === 'floral' && (
                  <>
                    <g fill={earrings.color}>
                      <circle cx="120" cy="124" r="3" />
                      <circle cx="116" cy="124" r="2" />
                      <circle cx="124" cy="124" r="2" />
                      <circle cx="120" cy="120" r="2" />
                      <circle cx="120" cy="128" r="2" />
                    </g>
                    <g fill={earrings.color}>
                      <circle cx="200" cy="124" r="3" />
                      <circle cx="196" cy="124" r="2" />
                      <circle cx="204" cy="124" r="2" />
                      <circle cx="200" cy="120" r="2" />
                      <circle cx="200" cy="128" r="2" />
                    </g>
                  </>
                )}
              </g>

              {/* Arms */}
              <path d="M100 210c-18 10-30 28-34 52-2 10 10 12 14 6 8-14 18-26 30-36" fill="none" stroke="#f3cdbd" strokeWidth="10" strokeLinecap="round" />
              <path d="M220 210c18 10 30 28 34 52 2 10-10 12-14 6-8-14-18-26-30-36" fill="none" stroke="#f3cdbd" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
