import { BackButton } from "./BackButton";
import { SelectionHeader } from "./SelectionHeader";
import { OptionGrid } from "./OptionGrid";
import { LaunchButton } from "./LaunchButton";

type Option = {
  id: string;
  name: string;
  description: string;
};

type Props = {
  type: "browser" | "os";
  options: Option[];
  selected: string | null;
  onSelect: (name: string) => void;
  onBack: () => void;
  onLaunch: () => void;
};

export const SelectionScreen = ({ type, options, selected, onSelect, onBack, onLaunch }: Props) => (
  <div className="min-h-[80vh] min-w-[70vw] max-w-7xl mx-auto">
    <BackButton onClick={onBack} />
    <SelectionHeader type={type} />
    <OptionGrid options={options} selected={selected} onSelect={onSelect} />
    <LaunchButton selected={selected} onLaunch={onLaunch} />
  </div>
);
