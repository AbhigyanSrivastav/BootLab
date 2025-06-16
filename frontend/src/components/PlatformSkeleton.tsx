export function PlatformSkeleton() {
  return (
    <div className="animate-pulse mb-6 sm:mb-8 md:mb-12">
   
      <div className="mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
        <div className="h-5 sm:h-6 md:h-8 lg:h-9 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg sm:rounded-xl mb-1.5 sm:mb-2 w-32 sm:w-48 md:w-64 mx-auto sm:mx-0"></div>
        <div className="h-3 sm:h-4 md:h-5 lg:h-6 bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded-md sm:rounded-lg w-48 sm:w-72 md:w-96 mx-auto sm:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm"
          >

            <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gray-600/50 to-gray-700/30 rounded-md sm:rounded-lg"></div>
            </div>

            <div className="h-4 sm:h-5 md:h-6 lg:h-7 bg-gradient-to-r from-gray-600/50 to-gray-700/30 rounded-md sm:rounded-lg mb-1.5 sm:mb-2 w-3/4 mx-auto"></div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="h-2.5 sm:h-3 md:h-4 bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded w-full"></div>
              <div className="h-2.5 sm:h-3 md:h-4 bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded w-4/5 mx-auto"></div>
              <div className="h-2.5 sm:h-3 md:h-4 bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded w-3/5 mx-auto"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl animate-shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
