type SelectionHeaderProps = {
  type: "browser" | "os";
};

export const SelectionHeader = ({ type }: SelectionHeaderProps) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white mb-4">
      Choose your {type === "browser" ? "Browser" : "Operating System"}
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
      Select from our collection of{" "}
      {type === "browser" ? "modern web browsers" : "operating systems"} optimized for cloud computing.
    </p>
  </div>
);
