import { Button } from "@/components/shadcn-ui/button"
import type { HeroSectionProps } from "@/types/types"

export function HeroSection({ onLaunchPlatform }: HeroSectionProps) {
  return (
    <section className="flex min-h-[75vh] h-[70vh] w-full max-w-6xl mx-auto flex-col items-center justify-center gap-8 p-8 text-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-sm text-blue-200 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Cloud Workspace
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-6">
            Launch your platform
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Choose from our collection of browsers, operating systems, and development tools. Experience seamless
            computing with enterprise-grade performance in the cloud.
          </p>

          <Button
            onClick={onLaunchPlatform}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 text-lg backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Launch Your Platform
          </Button>
        </div>
      </div>
    </section>
  )
}
