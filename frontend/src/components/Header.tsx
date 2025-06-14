import { Button } from "@/components/shadcn-ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 backdrop-blur-sm bg-gray-900/80 px-8 py-4 text-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          BootLab
        </h2>
      </div>
      <nav className="flex items-center gap-8">
        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-0">
          Sign In
        </Button>
      </nav>
    </header>
  );
}
