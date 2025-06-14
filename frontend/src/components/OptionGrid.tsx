import type { JSX } from "react"

type Option = {
  id: string
  name: string
  description: string
}

interface OptionGridProps {
  options: Option[]
  selected: string | null
  onSelect: (name: string) => void
}

const getIcon = (id: string) => {
  const icons: Record<string, JSX.Element> = {
    chrome: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#4285F4" />
        <circle cx="12" cy="12" r="4" fill="#EA4335" />
        <path d="M12 8L8 16h8L12 8z" fill="#FBBC05" />
      </svg>
    ),
    firefox: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF7139">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
    safari: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00D4FF">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    edge: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0078D4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
    brave: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FB542B">
        <path d="M12 2L3 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-9-5z" />
      </svg>
    ),
    windows: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00BCF2">
        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-5.5V12l-8 .09V5.21l8-1.71zm0 11.5v5.25l-8-1.13v-5.97L20 18zm-17 0l6 .75v5.96L3 24V18z" />
      </svg>
    ),
    ubuntu: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E95420">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    macos: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    debian: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#A81D33">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    centos: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#932279">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  }
  return icons[id] || <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
}

export function OptionGrid({ options, selected, onSelect }: OptionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.name)}
          className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-105 ${
            selected === option.name
              ? "border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 shadow-xl shadow-blue-500/20"
              : "border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-gray-600 hover:shadow-lg backdrop-blur-sm"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              {getIcon(option.id)}
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                {option.name}
              </h3>
            </div>

            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
              {option.description}
            </p>

            {selected === option.name && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
