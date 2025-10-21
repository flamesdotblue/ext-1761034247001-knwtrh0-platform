import { motion } from 'framer-motion'

const swatches = {
  lips: ['#ff3b30', '#ff6b81', '#e11d48', '#d6336c', '#ff7f50'],
  eyeshadow: ['#a78bfa', '#60a5fa', '#f472b6', '#f59e0b', '#34d399'],
  blush: ['#ff9eb5', '#ffb3c1', '#ff8fab', '#fda4af', '#fca5a5'],
  hair: ['#1f2937', '#3b2f2f', '#6b4f4f', '#8b5cf6', '#f59e0b'],
}

export default function MakeupPanel({ makeup, hairColor, onChange, onHair }) {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Makeup & Hair</h2>
        <p className="text-sm text-gray-500">Finishing touches</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Lips">
          <SwatchRow palette={swatches.lips} current={makeup.lips} onPick={(c) => onChange({ lips: c })} />
        </Section>
        <Section title="Eyeshadow">
          <SwatchRow palette={swatches.eyeshadow} current={makeup.eyeshadow} onPick={(c) => onChange({ eyeshadow: c })} />
        </Section>
        <Section title="Blush">
          <SwatchRow palette={swatches.blush} current={makeup.blush} onPick={(c) => onChange({ blush: c })} />
        </Section>
        <Section title="Hair Color">
          <SwatchRow palette={swatches.hair} current={hairColor} onPick={(c) => onHair(c)} />
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">{title}</h3>
      {children}
    </div>
  )
}

function SwatchRow({ palette, current, onPick }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {palette.map((c) => (
        <motion.button
          key={c}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onPick(c)}
          className={`h-9 w-9 rounded-full ring-1 ring-black/5 shadow-sm ${current === c ? 'outline outline-2 outline-rose-400' : ''}`}
          style={{ backgroundColor: c }}
          aria-label={`Pick ${c}`}
        />
      ))}
    </div>
  )
}
