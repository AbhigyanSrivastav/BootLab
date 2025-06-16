import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { PlatformSelection } from "./PlatformSelection";
import { useGetOptions } from "@/hooks";
import { Header } from "./Header";

export const Home = () => {
  const [view, setView] = useState<"main" | "platforms">("main");
  const { options, loading, error } = useGetOptions(view === "platforms");

  return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {view === "main" && <Header />}
        <div
          className={
            view === "main" ? "flex flex-1 items-center justify-center" : ""
          }
        >
          {view === "main" ? (
            <HeroSection onLaunchPlatform={() => setView("platforms")} />
          ) : (
            <PlatformSelection
              options={options}
              loading={loading}
              error={error}
              onBack={() => setView("main")}
            />
          )}
        </div>
      </div>
  );
};
