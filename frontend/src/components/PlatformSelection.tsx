import { useState } from "react";
import { PlatformSection } from "./PlatformSection";
import { Button } from "@/components/shadcn-ui/button";
import type { ImageOption, LaunchState, PlatformSelectionProps } from "@/types/types";
import { LaunchModal } from "./LaunchModal";
import { useLaunch } from "@/hooks/useLaunch";
import { ErrorModal } from "./ErrorModal";
import { PlatformSelectionSkeleton } from "./PlatformSelectionSkeleton";

export function PlatformSelection({
  onBack,
  options,
  loading,
  error,
}: PlatformSelectionProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<ImageOption | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [launchState, setLaunchState] = useState<LaunchState>("details");
  const [progress, setProgress] = useState(0);
  const [platformUrl, setPlatformUrl] = useState<string>("https://demo.com");

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { launch, reset } = useLaunch();

  const handlePlatformSelect = (platform: ImageOption) => {
    setSelectedPlatform((prev) => (prev?.id === platform.id ? null : platform));
  };

  const handleLaunchClick = () => {
    if (selectedPlatform) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setLaunchState("details");
    setProgress(0);
    reset();
  };

  const handleLaunchPlatform = async () => {
    if (!selectedPlatform) return;

    setLaunchState("launching");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? prev : prev + Math.random() * 10));
    }, 200);

    try {
      const url = await launch(selectedPlatform.id);
      clearInterval(interval);
      setProgress(100);

      if (url) {
        setPlatformUrl(url);
        setLaunchState("ready");
      } else {
        throw new Error("No URL returned");
      }
    } catch (err) {
      clearInterval(interval);
      setIsModalOpen(false); 
      setErrorMessage("Failed to launch platform. Please try again later." + err); 
      setIsErrorModalOpen(true); 
    }
  };

  const handleCloseErrorModal = () => {
    setLaunchState("details");
    setProgress(0);
    reset();
    setIsErrorModalOpen(false);
    setErrorMessage("");
  };

   if (loading) {
    return <PlatformSelectionSkeleton />
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/70 hover:bg-gray-700/70 px-4 py-2 rounded-xl border border-gray-700/50 hover:border-gray-600"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <Button
            onClick={handleLaunchClick}
            disabled={!selectedPlatform}
            className={`group relative px-8 py-3 rounded-2xl shadow-xl transition-all duration-300 border-0 ${
              selectedPlatform
                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold hover:shadow-2xl transform hover:scale-105"
                : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 rounded-2xl ${
              selectedPlatform ? "group-hover:opacity-100" : ""
            }`} />
            <div className="relative z-10 flex items-center gap-2">
              <svg className={`w-5 h-5 transition-transform duration-300 ${
                selectedPlatform ? "group-hover:rotate-12" : ""
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Launch
            </div>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Platform</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Select from our collection of browsers, operating systems, and development tools optimized for cloud computing.
          </p>
        </div>
              {/* fallback */}
        {loading && <p className="text-center text-gray-400">Loading platform options...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="space-y-12">
            {options.map((group) => (
              <PlatformSection
                key={group.type}
                title={group.label}
                description={`Select a ${group.label.toLowerCase()}`}
                platforms={group.items}
                selectedPlatform={selectedPlatform}
                onSelect={handlePlatformSelect}
              />
            ))}
          </div>
        )}

        {selectedPlatform && (
          <LaunchModal
            platform={selectedPlatform}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onLaunch={handleLaunchPlatform}
            progress={progress}
            launchState={launchState}
            platformUrl={platformUrl}
          />
        )}

        <ErrorModal
          isOpen={isErrorModalOpen}
          onClose={handleCloseErrorModal}
          message={errorMessage}
        />
      </div>
    </div>
  );
}


