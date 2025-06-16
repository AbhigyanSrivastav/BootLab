import type { LaunchButtonProps } from "@/types/types"


export function LaunchButton({ selected, onLaunch }: LaunchButtonProps) {
  if (!selected) return null

  return (
    <div className="flex justify-center">
      <button
        onClick={onLaunch}
        className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 text-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 flex items-center gap-3">
          <svg
            className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Launch {selected}
        </div>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/50 to-purple-500/50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      </button>
    </div>
  )
}
