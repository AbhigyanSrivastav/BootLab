import { useEffect } from "react"
import { Button } from "@/components/shadcn-ui/button"
import { X, RefreshCw, Home, AlertCircle } from "lucide-react"
import type { ErrorModalProps } from "@/types/types"

export function ErrorModal({
  isOpen,
  onClose,
  message,
  showRetry,
  showHome,
  onRetry,
  onHome,
  autoClose,
}: ErrorModalProps) {

  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose,10000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoClose, onClose])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/20 shadow-xl w-full max-w-md">

        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h3 className="text-white text-lg font-semibold">Error</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/10">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 text-center space-y-4">
          <div className="text-red-400 bg-red-500/20 p-4 rounded-full inline-block">
            <AlertCircle className="w-10 h-10" />
          </div>
          <p className="text-white text-base">{message}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {showRetry && onRetry && (
              <Button onClick={onRetry} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <RefreshCw className="w-4 h-4 mr-2" /> Retry
              </Button>
            )}
            {showHome && onHome && (
              <Button onClick={onHome} variant="outline" className="flex-1 text-white border-gray-600">
                <Home className="w-4 h-4 mr-2" /> Home
              </Button>
            )}
            {!showRetry && !showHome && (
              <Button onClick={onClose} className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                Close
              </Button>
            )}
          </div>

          {autoClose && (
            <p className="text-xs text-gray-400">This will close in {autoClose} seconds</p>
          )}
        </div>
      </div>
    </div>
  )
}
