import { createFileRoute } from '@tanstack/react-router'
import { Heart } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const TEMPLATES = [
  {
    id: 1,
    title: 'Minimal Portfolio',
    description:
      'Perfect for designers who want their work to speak for itself.',
    category: 'Portfolio',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'SaaS Landing Page',
    description: 'A high-conversion landing page with pricing and features.',
    category: 'Business',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'E-commerce Shop',
    description: 'Clean product listings and a sleek checkout flow.',
    category: 'Shop',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Personal Blog',
    description: 'Elegantly typeset layout focused on readability.',
    category: 'Blog',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Creative Agency',
    description: 'Bold typography and dynamic layouts for agencies.',
    category: 'Agency',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Developer Resume',
    description: 'A dark-themed resume for software engineers.',
    category: 'Portfolio',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-black text-[#d1d5db] font-sans selection:bg-[#c4a484] selection:text-black antialiased">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* Logo - Typography Only */}
        <div className="mb-12">
          <span className="text-3xl font-black tracking-tighter text-white">
            oat<span className="text-[#c4a484]">.</span>meal
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
          Website templates built <br />
          with Oat UI.
        </h1>
        <div className="space-y-6 text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mb-12">
          <p>
            Beautiful, minimal, and ultra-lightweight website templates for the
            community. Built using the zero-dependency Oat UI library.
          </p>
          <p>
            Oat Project provides production-ready website templates for those
            who prefer the simplicity of raw HTML and CSS. No complex build
            tools, no bloated frameworks—just clean, semantic code.
          </p>
        </div>

        <div className="flex gap-4 mb-32">
          <a
            href="#gallery"
            className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors"
          >
            Browse templates
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-black text-white font-bold rounded-md border border-gray-800 hover:border-gray-600 transition-colors"
          >
            Contribution Guide
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 border-t border-[#1a1a1a] pt-16">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-[#c4a484] uppercase tracking-[0.3em]">
              Pure Performance
            </span>
            <h3 className="text-white font-bold text-lg">
              Zero Framework Bloat
            </h3>
            <p className="text-gray-400 text-sm">
              Every template relies on Oat UI's minimal 8KB footprint. Maximum
              speed, zero overhead.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-[#c4a484] uppercase tracking-[0.3em]">
              Community Driven
            </span>
            <h3 className="text-white font-bold text-lg">Open for Everyone</h3>
            <p className="text-gray-400 text-sm">
              Free to use, customize, and redistribute. Build your next project
              in minutes, not hours.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-[#c4a484] uppercase tracking-[0.3em]">
              Modern Aesthetics
            </span>
            <h3 className="text-white font-bold text-lg">Clean by Design</h3>
            <p className="text-gray-400 text-sm">
              Focused on typography, spacing, and accessibility. Templates that
              look premium out of the box.
            </p>
          </div>
        </div>

        {/* Template Gallery header */}
        <div id="gallery" className="mb-16 flex items-center justify-between">
          <h2 className="text-2xl font-black text-white tracking-widest uppercase italic">
            The Collection
          </h2>
          <div className="h-px bg-[#1a1a1a] grow mx-8 hidden md:block"></div>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            © 2026
          </p>
        </div>

        {/* Template Grid - 3 per row, A4 shape */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 pb-32">
          {TEMPLATES.map((template) => (
            <div key={template.id} className="group flex flex-col">
              {/* Card Image Wrapper - A4 Aspect Ratio (1:1.414) */}
              <div className="relative aspect-[1/1.414] bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm overflow-hidden transition-all duration-300 group-hover:border-white/10 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.03)]">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />

                {/* Overlay Interaction */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                  <button className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:scale-105 active:scale-95 transition-all w-32 shadow-2xl">
                    Preview
                  </button>
                  <button className="px-6 py-2 bg-transparent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-white/10 active:scale-95 transition-all w-32 border border-white/20 shadow-2xl">
                    Download
                  </button>

                  {/* Name appears on hover overlay bottom */}
                  <div className="absolute bottom-8 left-0 right-0 px-4 text-center">
                    <h4 className="text-[12px] font-black text-white tracking-[0.2em] uppercase shadow-sm">
                      {template.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Minimal Info Below */}
              <div className="mt-5 flex justify-between items-center px-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                  {template.category}
                </span>
                <span className="text-[9px] font-medium text-gray-500 uppercase italic">
                  Free Pack
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-20 border-t border-[#1a1a1a]">
        <div className="flex flex-col items-center gap-12 text-center">
          <span className="text-3xl font-black tracking-tighter text-white">
            oat<span className="text-[#c4a484]">.</span>meal
          </span>

          <div className="flex flex-col items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#c4a484] transition-colors"
            >
              GitHub Project
            </a>

            <div className="flex flex-col items-center gap-2">
              <div className="text-sm text-gray-500 font-bold flex items-center justify-center gap-1.5">
                Made with <Heart size={14} className="fill-white text-white" />{' '}
                by{' '}
                <a
                  href="https://github.com/meetmakwana7396"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c4a484] transition-colors"
                >
                  meetmakwana
                </a>
              </div>
              <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">
                © 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
