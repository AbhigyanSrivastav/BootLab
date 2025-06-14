import { Button } from "./shadcn-ui/button";

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton = ({ onClick }: BackButtonProps) => (
  <div className="mb-8">
    <Button
      onClick={onClick}
      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-xl border border-gray-700/50 hover:border-gray-600 backdrop-blur-sm"
    >
      <svg
        className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Home
    </Button>
  </div>
);
