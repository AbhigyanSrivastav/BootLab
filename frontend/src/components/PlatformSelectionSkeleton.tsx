import { PlatformSkeleton } from "./PlatformSkeleton"

export function PlatformSelectionSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <div className="animate-pulse">
            <div className="h-7 sm:h-8 md:h-9 lg:h-10 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-md sm:rounded-lg md:rounded-xl w-20 sm:w-24 md:w-28 lg:w-32"></div>
          </div>

          <div className="animate-pulse">
            <div className="h-7 sm:h-8 md:h-9 lg:h-10 bg-gradient-to-r from-gray-600/30 to-gray-700/20 rounded-lg sm:rounded-xl md:rounded-2xl w-16 sm:w-20 md:w-24"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-pulse">
          <div className="h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-r from-gray-600/50 to-gray-700/30 rounded-lg sm:rounded-xl mb-2 sm:mb-3 md:mb-4 w-48 sm:w-64 md:w-80 mx-auto"></div>
          <div className="h-4 sm:h-5 md:h-6 lg:h-7 bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded-md sm:rounded-lg w-64 sm:w-80 md:w-96 lg:w-[32rem] mx-auto"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          <PlatformSkeleton />

          <PlatformSkeleton />
        </div>
      </div>

      <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 animate-pulse">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-ping"></div>
        <span className="text-blue-200 text-xs sm:text-sm font-medium">Loading platforms...</span>
      </div>
    </div>
  )
}
