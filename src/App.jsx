import { useState } from 'react'
import { Shuffle, RefreshCw } from 'lucide-react'
import DollCanvas from './components/DollCanvas'
import Wardrobe from './components/Wardrobe'
import JewelBox from './components/JewelBox'
import MakeupPanel from './components/MakeupPanel'

const dresses = [
  { id: 'rose-satin', name: 'Rose Satin', color: '#ff4d6d', accent: '#ffa3b1' },
  { id: 'sky-tulle', name: 'Sky Tulle', color: '#80bfff', accent: '#d6ecff' },
  { id: 'mint-silk', name: 'Mint Silk', color: '#7de2d1', accent: '#d8fff8' },
  { id: 'violet-gala', name: 'Violet Gala', color: '#7c4dff', accent: '#c9b6ff' },
]

const jewels = {
  necklaces: [
    { id: 'pearl', name: 'Pearl Strand', color: '#f7f3ef' },
    { id: 'ruby', name: 'Ruby Heart', color: '#d90429' },
    { id: 'sapphire', name: 'Sapphire Drop', color: '#2a6fdb' },
    { id: 'emerald', name: 'Emerald Bloom', color: '#1faa59' },
  ],
  earrings: [
    { id: 'stud', name: 'Diamond Studs', color: '#ffffff' },
    { id: 'hoop', name: 'Gold Hoops', color: '#f2c14e' },
    { id: 'tear', name: 'Teardrops', color: '#72a0ff' },
    { id: 'floral', name: 'Floral', color: '#ff69b4' },
  ],
}

const defaultMakeup = {
  lips: '#ff6b81',
  eyeshadow: '#b197fc',
  blush: '#ff9eb5',
}

export default function App() {
  const [selectedDress, setSelectedDress] = useState(dresses[0])
  const [selectedNecklace, setSelectedNecklace] = useState(jewels.necklaces[0])
  const [selectedEarrings, setSelectedEarrings] = useState(jewels.earrings[0])
  const [makeup, setMakeup] = useState(defaultMakeup)
  const [hairColor, setHairColor] = useState('#3b2f2f')

  const resetAll = () => {
    setSelectedDress(dresses[0])
    setSelectedNecklace(jewels.necklaces[0])
    setSelectedEarrings(jewels.earrings[0])
    setMakeup(defaultMakeup)
    setHairColor('#3b2f2f')
  }

  const randomize = () => {
    const r = (arr) => arr[Math.floor(Math.random() * arr.length)]
    setSelectedDress(r(dresses))
    setSelectedNecklace(r(jewels.necklaces))
    setSelectedEarrings(r(jewels.earrings))
    const lips = ['#ff6b81', '#ff3b30', '#d6336c', '#ff7f50']
    const eyeshadow = ['#a78bfa', '#60a5fa', '#f59e0b', '#34d399']
    const blush = ['#ff9eb5', '#ffb3c1', '#ff8fab', '#fda4af']
    const hair = ['#3b2f2f', '#6b4f4f', '#1f2937', '#8b5cf6']
    setMakeup({ lips: r(lips), eyeshadow: r(eyeshadow), blush: r(blush) })
    setHairColor(r(hair))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 shadow-inner"></div>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">Dress-Up Studio</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={randomize} className="inline-flex items-center gap-2 rounded-xl bg-white/70 hover:bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-black/5 transition">
              <Shuffle className="h-4 w-4" />
              Surprise Me
            </button>
            <button onClick={resetAll} className="inline-flex items-center gap-2 rounded-xl bg-gray-900 hover:bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition">
              <RefreshCw className="h-4 w-4" />
              Reset
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-5 xl:col-span-6">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_50px_rgba(240,46,170,0.1)] p-4 sm:p-6">
            <DollCanvas
              dress={selectedDress}
              necklace={selectedNecklace}
              earrings={selectedEarrings}
              makeup={makeup}
              hairColor={hairColor}
            />
          </div>
        </section>

        <section className="lg:col-span-7 xl:col-span-6 space-y-6">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <Wardrobe
              dresses={dresses}
              selectedId={selectedDress.id}
              onSelect={setSelectedDress}
            />
          </div>

          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <JewelBox
              necklaces={jewels.necklaces}
              earrings={jewels.earrings}
              selected={{ necklace: selectedNecklace.id, earrings: selectedEarrings.id }}
              onSelectNecklace={setSelectedNecklace}
              onSelectEarrings={setSelectedEarrings}
            />
          </div>

          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <MakeupPanel
              makeup={makeup}
              hairColor={hairColor}
              onChange={(m) => setMakeup((prev) => ({ ...prev, ...m }))}
              onHair={(c) => setHairColor(c)}
            />
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 pb-10 text-center text-sm text-gray-500">
        Crafted with love • Inspired by crisp, tactile Apple-like UI
      </footer>
    </div>
  )
}
