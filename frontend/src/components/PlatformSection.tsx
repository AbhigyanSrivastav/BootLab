import type { PlatformSectionProps } from "@/types/types"

export function PlatformSection({ title, description, platforms, selectedPlatform, onSelect }: PlatformSectionProps) {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => onSelect(platform)}
            className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-center transform hover:scale-105 backdrop-blur-sm ${
              selectedPlatform?.id === platform.id
                ? "border-blue-400/60 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-xl shadow-blue-500/20"
                : "border-white/20 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/30 hover:shadow-lg"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-200 mb-2">
                {platform.name}
              </h4>

              <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-200 leading-relaxed">
                {platform.description}
              </p>

              {selectedPlatform?.id === platform.id && (
                <div className="absolute top-3 right-3">
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
    </div>
  )
}

