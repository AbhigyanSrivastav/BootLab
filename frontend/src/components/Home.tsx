"use client";

import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { SelectionScreen } from "./SelectionScreen";

export const Home = () => {
  const [view, setView] = useState<"main" | "browser" | "os">("main");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const browserOptions = [
    { id: "chrome", name: "Google Chrome", description: "Fast, secure, and customizable web browsing experience" },
    { id: "firefox", name: "Mozilla Firefox", description: "Privacy-focused browsing with enhanced security features" },
    { id: "safari", name: "Safari", description: "Optimized for Apple ecosystem with seamless integration" },
    { id: "edge", name: "Microsoft Edge", description: "Built-in security and productivity tools for modern web" },
    { id: "brave", name: "Brave Browser", description: "Privacy by default with built-in ad blocking technology" },
  ];

  const osOptions = [
    { id: "windows", name: "Windows 11", description: "Latest Windows experience with modern interface and features" },
    { id: "ubuntu", name: "Ubuntu Linux", description: "Popular Linux distribution with user-friendly interface" },
    { id: "macos", name: "macOS", description: "Apple's desktop operating system with elegant design" },
    { id: "debian", name: "Debian", description: "Stable and reliable Linux OS for enterprise applications" },
    { id: "centos", name: "CentOS", description: "Enterprise-grade Linux distribution for server environments" },
  ];

  const handleLaunch = () => {
    alert(`🚀 Launching ${selectedOption}...`);
  };

  const handleBack = () => {
    setView("main");
    setSelectedOption(null);
  };

  return (
    <div className="min-h-[80vh] min-w-[75vw] bg-gradient-to-br border border-amber-50 rounded-lg from-gray-900 via-gray-800 to-gray-900 p-6">
      {view === "main" ? (
        <HeroSection onLaunchBrowser={() => setView("browser")} onLaunchOS={() => setView("os")} />
      ) : (
        <SelectionScreen
          type={view}
          options={view === "browser" ? browserOptions : osOptions}
          selected={selectedOption}
          onSelect={setSelectedOption}
          onBack={handleBack}
          onLaunch={handleLaunch}
        />
      )}
    </div>
  );
};
    