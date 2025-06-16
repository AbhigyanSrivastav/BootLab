import { useEffect } from "react";
import { Button } from "@/components/shadcn-ui/button";
import { Copy, ExternalLink, X } from "lucide-react";
import type { LaunchModalProps } from "@/types/types";

export function LaunchModal({
  platform,
  isOpen,
  onClose,
  onLaunch,
  progress,
  launchState,
  platformUrl,
}: LaunchModalProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleOpenPlatform = () => {
    window.open(platformUrl, "_blank");
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/20 shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
          <h3 className="text-xl font-bold text-white">Launch Platform</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {launchState === "details" && (
            <div className="text-center space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {platform.name}
                </h4>
                <p className="text-gray-300 leading-relaxed">{platform.description}</p>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm">
                {platform.type === "browser" ? "Web Browser" : "Operating System"}
              </div>

              <Button
                onClick={onLaunch}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Launch {platform.name}
              </Button>
            </div>
          )}

          {launchState === "launching" && (
            <div className="text-center space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Launching {platform.name}</h4>
                <p className="text-gray-300 mb-4">Setting up your cloud environment...</p>

                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400">{Math.round(progress)}% Complete</p>
              </div>
            </div>
          )}

          {launchState === "ready" && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{platform.name} is Ready!</h4>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-2xl p-4 space-y-3">
                <Step number="1" text="Click on the platform URL below to open your platform" />
                <Step number="2" text="When prompted for credentials, use the username and password provided below" />
              </div>

              <Credential label="Username" value="kasm_user" onCopy={() => copyToClipboard("kasm_user")} />
              <Credential label="Password" value="password" onCopy={() => copyToClipboard("password")} />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Platform URL</label>
                <button
                  onClick={handleOpenPlatform}
                  className="w-full flex items-center bg-gray-700/50 border border-gray-600 hover:border-blue-400/50 rounded-xl p-3 transition-colors group"
                >
                  <span className="text-blue-400 flex-1 font-mono text-left truncate">{platformUrl}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Step = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
      {number}
    </div>
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

const Credential = ({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy: () => void;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <div className="flex items-center bg-gray-700/50 border border-gray-600 rounded-xl p-3">
      <span className="text-white flex-1 font-mono">{value}</span>
      <button
        onClick={onCopy}
        className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  </div>
);

